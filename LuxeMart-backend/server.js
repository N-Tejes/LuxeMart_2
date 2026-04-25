require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const { User, Product, Order } = require('./models');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

app.use(cors());
app.use(express.json());

// ── Serve Frontend Static Files ─────────────────────────────
app.use(express.static(path.join(__dirname, '..', 'LuxeMart-main')));

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretluxemartkey';

// ── Database Connection ──────────────────────────────────────
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/luxemart')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// ── Auth Middleware ──────────────────────────────────────────
const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, error: 'No token provided' });
    }
    const token = authHeader.replace('Bearer ', '');
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ success: false, error: 'Not authorized' });
  }
};

// ── API Health ───────────────────────────────────────────────
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.post('/api/v1/auth/register', async (req, res) => {
  try {
    const { name, firstName, lastName, email, mobile, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ success: false, error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, firstName, lastName, email, mobile, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ success: true, token, user: { id: user._id, name, firstName, lastName, email, mobile } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/v1/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, token, user: { id: user._id, name: user.name, firstName: user.firstName, lastName: user.lastName, email: user.email, mobile: user.mobile } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/v1/auth/me', authMiddleware, (req, res) => {
  res.json({ success: true, user: { id: req.user._id, name: req.user.name, email: req.user.email } });
});

app.post('/api/v1/auth/logout', (req, res) => {
  res.json({ success: true, message: 'Logged out' });
});

// ── Products Routes ──────────────────────────────────────────
app.get('/api/v1/products', async (req, res) => {
  try {
    const { category, search, limit } = req.query;
    let query = {};
    if (category) query.category = category;
    if (search) query.name = { $regex: search, $options: 'i' };

    let dbQuery = Product.find(query);
    if (limit) dbQuery = dbQuery.limit(parseInt(limit));

    const products = await dbQuery.exec();
    res.json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/v1/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, error: 'Not found' });
    res.json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/v1/products/category/:category', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/v1/products/:id/review', authMiddleware, async (req, res) => {
  // Dummy review
  res.json({ success: true, message: 'Review added' });
});

app.get('/api/v1/users/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({ success: true, data: { name: user.name, email: user.email, firstName: user.firstName, lastName: user.lastName, mobile: user.mobile, dob: user.dob, gender: user.gender } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/v1/users/profile', authMiddleware, async (req, res) => {
  try {
    const { firstName, lastName, mobile, dob, gender } = req.body;
    const name = (firstName || '') + (lastName ? ' ' + lastName : '');

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, firstName, lastName, mobile, dob, gender },
      { new: true }
    );

    res.json({ success: true, data: { id: user._id, name: user.name, email: user.email, firstName: user.firstName, lastName: user.lastName, mobile: user.mobile, dob: user.dob, gender: user.gender } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/v1/users/wishlist', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({ success: true, data: user.wishlist || [] });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/v1/users/wishlist', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.wishlist = req.body.wishlist || [];
    await user.save();
    res.json({ success: true, data: user.wishlist });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/v1/users/cart', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({ success: true, data: user.cart || [] });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/v1/users/cart', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.cart = req.body.cart || [];
    await user.save();
    res.json({ success: true, data: user.cart });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.put('/api/v1/users/change-password', authMiddleware, async (req, res) => {
  res.json({ success: true, message: 'Password updated' });
});

// ── Orders Routes ────────────────────────────────────────────
app.post('/api/v1/orders', authMiddleware, async (req, res) => {
  try {
    const { items, total } = req.body;
    const order = new Order({ user: req.user._id, items, total });
    await order.save();
    res.status(201).json({ success: true, data: order });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/v1/orders', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('items.product');
    res.json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/v1/orders/:id', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id, user: req.user._id });
    if (!order) return res.status(404).json({ success: false, error: 'Order not found' });
    res.json({ success: true, data: order });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/v1/orders/:id', authMiddleware, async (req, res) => {
  try {
    await Order.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    res.json({ success: true, message: 'Order cancelled' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ── AI Routes ────────────────────────────────────────────────
app.get('/api/v1/ai/demo-style-advice', (req, res) => {
  res.json({ success: true, advice: 'Based on current trends, we recommend a smart casual look for your occasion!' });
});
app.post('/api/v1/ai/style-advice', (req, res) => {
  res.json({ success: true, advice: 'Here is some tailored AI advice for your style.' });
});
app.post('/api/v1/ai/chat', (req, res) => {
  const { message } = req.body;
  res.json({ success: true, reply: `AI Chatbot: I received your message "${message}". How can I assist you further?` });
});

// ── Stream API (SSE) ─────────────────────────────────────────
app.get('/api/v1/stream/live', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const interval = setInterval(() => {
    res.write(`data: ${JSON.stringify({ activeUsers: Math.floor(Math.random() * 100) + 10, salesToday: Math.floor(Math.random() * 1000) })}\n\n`);
  }, 5000);

  req.on('close', () => {
    clearInterval(interval);
  });
});

// ── Socket.io Chat ───────────────────────────────────────────
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join_room', ({ username, room }) => {
    socket.join(room);
    console.log(`${username} joined room ${room}`);
  });

  socket.on('send_message', (data) => {
    io.to(data.room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// ── Catch-all: serve index.html for any non-API route ───────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'LuxeMart-main', 'index.html'));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
