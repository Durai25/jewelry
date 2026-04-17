const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const Razorpay = require("razorpay");
require("dotenv").config();

const app = express();
app.use(cors({
  origin: ["http://localhost:3000", "http://127.0.0.1:3000"]
}));
app.use(express.json());

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert("./serviceAccountKey.json")
  });
}
const db = admin.firestore();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// API Routes
app.get("/api/products", async (req, res) => {
  try {
    const snapshot = await db.collection("products").get();
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const data = req.body;
    const docRef = await db.collection("products").add(data);
    res.json({ id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    await db.collection("products").doc(req.params.id).delete();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/orders", async (req, res) => {
  try {
    const snapshot = await db.collection("orders").orderBy("timestamp", "desc").limit(50).get();
    const orders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/orders", async (req, res) => {
  try {
    const data = { 
      ...req.body, 
      timestamp: admin.firestore.FieldValue.serverTimestamp() 
    };
    await db.collection("orders").add(data);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`
    });
    res.json({ 
      key: process.env.RAZORPAY_KEY_ID, 
      order 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

