const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String },
  dob: { type: String },
  gender: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  wishlist: [{
    id: String,
    name: String,
    price: Number,
    image: String
  }],
  cart: [{
    id: String,
    name: String,
    price: Number,
    img: String,
    mrp: Number,
    qty: { type: Number, default: 1 }
  }]
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, default: 'LuxeMart' },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  discount: { type: Number, default: 0 },
  badge: { type: String, default: '' },
  isTrending: { type: Boolean, default: false },
  images: [{ type: String }],
  ratings: {
    average: { type: Number, default: 4 },
    count: { type: Number, default: 0 }
  }
}, { timestamps: true });

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true }
  }],
  total: { type: Number, required: true },
  status: { type: String, default: 'Pending' }
}, { timestamps: true });

module.exports = {
  User: mongoose.model('User', userSchema),
  Product: mongoose.model('Product', productSchema),
  Order: mongoose.model('Order', orderSchema)
};
