const mongoose = require('mongoose');
require('dotenv').config();
const { Product } = require('./models');

const products = [
  {
    name: 'Classic White Shirt',
    brand: 'Zara',
    category: 'men',
    price: 1500,
    originalPrice: 2000,
    discount: 25,
    badge: 'new',
    isTrending: true,
    images: ['https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500&auto=format&fit=crop'],
    ratings: { average: 4.5, count: 120 }
  },
  {
    name: 'Slim Fit Denim Jacket',
    brand: 'Levi\'s',
    category: 'men',
    price: 2500,
    originalPrice: 3500,
    discount: 28,
    badge: 'hot',
    isTrending: true,
    images: ['https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop'],
    ratings: { average: 4.8, count: 210 }
  },
  {
    name: 'Casual Chino Pants',
    brand: 'H&M',
    category: 'men',
    price: 1800,
    originalPrice: 2200,
    discount: 18,
    badge: '',
    isTrending: false,
    images: ['https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop'],
    ratings: { average: 4.2, count: 85 }
  },
  {
    name: 'Men\'s Formal Suit',
    brand: 'Raymond',
    category: 'men',
    price: 6500,
    originalPrice: 8500,
    discount: 23,
    badge: 'premium',
    isTrending: true,
    images: ['https://images.unsplash.com/photo-1594938298596-c89eb62f3a61?w=500&auto=format&fit=crop'],
    ratings: { average: 4.9, count: 320 }
  },
  {
    name: 'Elegant Evening Dress',
    brand: 'Gucci',
    category: 'women',
    price: 12000,
    originalPrice: 15000,
    discount: 20,
    badge: 'premium',
    isTrending: true,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop'],
    ratings: { average: 4.9, count: 150 }
  },
  {
    name: 'Casual Floral Dress',
    brand: 'Forever 21',
    category: 'women',
    price: 2200,
    originalPrice: 3000,
    discount: 26,
    badge: 'sale',
    isTrending: true,
    images: ['https://images.unsplash.com/photo-1515347619152-3cb5a1215b0b?w=500&auto=format&fit=crop'],
    ratings: { average: 4.5, count: 200 }
  },
  {
    name: 'Bridal Lehenga Choli',
    brand: 'Sabyasachi',
    category: 'wedding',
    price: 45000,
    originalPrice: 50000,
    discount: 10,
    badge: 'exclusive',
    isTrending: true,
    images: ['https://images.unsplash.com/photo-1583391733958-65681ce2d8b5?w=500&auto=format&fit=crop'],
    ratings: { average: 5.0, count: 50 }
  }
];

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/luxemart')
  .then(async () => {
    console.log('Connected to MongoDB');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded successfully');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error seeding data:', err);
    process.exit(1);
  });
