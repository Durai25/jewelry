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

  // Skeleton products: 8 placeholder cards shown immediately on page load, replaced by Firebase data seamlessly
  const skeletonProducts = Array.from({ length: 8 }, (_, i) => ({ id: `skeleton-${i}` }));

  // Skeleton card component - mimics real ProductCard layout with shimmer animation (CSS handled)
  const SkeletonCard = ({ id }) => (
    <div className="skeleton-card card">
      <div className="skeleton-image skeleton"></div>
      <div className="skeleton-text skeleton"></div>
      <div className="skeleton-price skeleton"></div>
      <div className="skeleton-heart skeleton"></div>
      <div className="skeleton-button skeleton"></div>
    </div>
  );

  if (loading) {
    // Show skeleton grid during Firebase fetch - ensures no blank screen
    return (
      <div className="grid">
        {skeletonProducts.map(product => (
          <SkeletonCard key={product.id} {...product} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error" style={{gridColumn: '1 / -1', textAlign: 'center', padding: '4rem'}}>
        Failed to load products from Firebase.
        <br />
        <button 
          className="btn btn-secondary" 
          onClick={() => window.location.reload()}
          style={{marginTop: '1rem'}}
        >
          Retry
        </button>
      </div>
    );
  }

  // Real products loaded successfully - apply filters and render
  return (
    <div className="grid">
      {filtered.length === 0 ? (
        <p style={{gridColumn: '1 / -1', textAlign: 'center', color: '#888'}}>
          No products match your filters.
        </p>
      ) : (
        filtered.map(p => <ProductCard key={p.id} product={p} />)
      )}
    </div>
  );
}

