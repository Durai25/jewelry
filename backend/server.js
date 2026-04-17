const express = require("express");
const cors = require("cors");
// const admin = require("firebase-admin");
const Razorpay = require("razorpay");
require("dotenv").config();

const app = express();
app.use(cors({
  origin: ["http://localhost:3000", "http://127.0.0.1:3000"]
}));
app.use(express.json());

// Firebase disabled - using mock data
const products = [
  {
    id: '1',
    name: 'Diamond Necklace',
    price: 2999,
    image: '/api/placeholder/400/400',
    category: 'Necklace',
    description: 'Stunning diamond necklace'
  },
  {
    id: '2',
    name: 'Gold Bracelet',
    price: 1499,
    image: '/api/placeholder/400/400',
    category: 'Bracelet',
    description: 'Elegant gold bracelet'
  },
  {
    id: '3',
    name: 'Emerald Ring',
    price: 899,
    image: '/api/placeholder/400/400',
    category: 'Ring',
    description: 'Beautiful emerald ring'
  },
  {
    id: '4',
    name: 'Pearl Earrings',
    price: 599,
    image: '/api/placeholder/400/400',
    category: 'Earrings',
    description: 'Classic pearl earrings'
  },
  {
    id: '5',
    name: 'Ruby Pendant',
    price: 1999,
    image: '/api/placeholder/400/400',
    category: 'Pendant',
    description: 'Gorgeous ruby pendant'
  }
];

let orders = [];

// Razorpay disabled - mock
// const razorpay = new Razorpay({ ... });

// API Routes
app.get("/api/products", (req, res) => {
  res.json(products);
});

// POST /api/products disabled in mock
app.post("/api/products", (req, res) => {
  res.status(501).json({ error: "POST disabled in mock mode" });
});

// DELETE /api/products/:id disabled in mock
app.delete("/api/products/:id", (req, res) => {
  res.status(501).json({ error: "DELETE disabled in mock mode" });
});

app.get("/api/orders", (req, res) => {
  res.json(orders);
});

app.post("/api/orders", (req, res) => {
  const data = { 
    ...req.body, 
    timestamp: new Date().toISOString(),
    id: Date.now().toString()
  };
  orders.unshift(data);
  if (orders.length > 50) orders = orders.slice(0, 50);
  res.json({ success: true });
});

app.post("/create-order", (req, res) => {
  const { amount } = req.body;
  const mockOrder = {
    id: `mock_${Date.now()}`,
    amount: Math.round(amount * 100),
    currency: "INR",
    status: "created"
  };
  res.json({ 
    key: "rzp_test_mock_key", 
    order: mockOrder 
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

