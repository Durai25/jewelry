import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import ProductCard from "./ProductCard";
export default function ProductGrid({ filters }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const snap = await getDocs(collection(db, "products"));
        setProducts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error('Fetch error:', error);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  let filtered = [...products];

  if (filters.search) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(filters.search.toLowerCase())
    );
  }

  if (filters.category) {
    filtered = filtered.filter(p => p.category === filters.category);
  }

  if (filters.minPrice) {
    filtered = filtered.filter(p => p.price >= filters.minPrice);
  }
  if (filters.maxPrice && filters.maxPrice < Infinity) {
    filtered = filtered.filter(p => p.price <= filters.maxPrice);
  }

  if (filters.sort === "low") filtered.sort((a,b)=>a.price-b.price);
  if (filters.sort === "high") filtered.sort((a,b)=>b.price-a.price);
  if (filters.sort === "latest") filtered.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt) || 0);

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="grid">
      {filtered.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}