# LuxeMart - Full Stack E-commerce Application

LuxeMart is a comprehensive, modern e-commerce web application featuring a rich frontend interface and a robust Node.js backend. The platform provides a full shopping experience, complete with product categories, user authentication, shopping carts, and wishlists.

## 🚀 Features

- **User Authentication:** Secure login and registration using JWT and bcrypt.
- **Product Categories:** Wide range of categorized clothing including Men's, Women's, Casual, College, Festival, Office, Party, and Wedding attire.
- **Shopping Cart & Wishlist:** Fully functional cart and wishlist synchronized between the frontend and MongoDB backend.
- **Responsive Design:** A beautifully styled vanilla CSS frontend with smooth micro-animations and a premium look.
- **RESTful API:** A well-structured Express.js API for handling user data, products, orders, and authentication.
- **Real-time Features:** (Optional) Integration with Socket.IO.
- **Image Uploads:** Handled via Multer for user/product avatars or items.

## 📂 Project Structure

```
LuxeMart/
├── LuxeMart-main/        # Frontend
│   ├── index.html        # Main landing page
│   ├── account.html      # User authentication and profile
│   ├── cart.html         # Shopping cart
│   ├── wishlist.html     # User wishlist
│   ├── api.js            # Frontend API interaction logic
│   ├── index.css         # Styling and design system
│   └── ... (other category pages and assets)
│
└── LuxeMart-backend/     # Backend
    ├── server.js         # Main Express server entry point
    ├── models.js         # Mongoose schema definitions
    ├── seed.js           # Database seeding script
    ├── package.json      # Backend dependencies
    └── .env              # Environment configuration
```

## 🛠️ Technology Stack

### Frontend
- **HTML5 & Semantic Structure**
- **Vanilla CSS3:** Custom design system, flexbox/grid layouts, animations.
- **Vanilla JavaScript:** DOM manipulation, Fetch API for backend integration.

### Backend
- **Node.js & Express.js:** Server framework and routing.
- **MongoDB & Mongoose:** NoSQL database and object data modeling.
- **Authentication:** `jsonwebtoken` (JWT) and `bcryptjs`.
- **Other Utilities:** `cors`, `dotenv`, `multer` (file uploads), `socket.io` (WebSockets).

## 💻 Running the Application Locally

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Atlas URI

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd LuxeMart-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `LuxeMart-backend` directory with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. (Optional) Seed the database with sample products:
   ```bash
   node seed.js
   ```
5. Start the server:
   ```bash
   node server.js
   ```
   The backend should now be running on `http://localhost:5000`.

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd LuxeMart-main
   ```
2. You can open `index.html` directly in your browser, or use a local development server like Live Server (VS Code extension) to run the application.
3. Ensure the frontend `api.js` points to `http://localhost:5000/api` (or your configured backend URL) to communicate with the server.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for features, bug fixes, or design improvements.
