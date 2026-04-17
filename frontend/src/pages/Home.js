import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import InstagramGallery from "../components/InstagramGallery";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaStar, FaShippingFast, FaShieldAlt, FaGem } from 'react-icons/fa';

export default function Home() {
  const [filters, setFilters] = useState({});

  const featuredProducts = [
    {
      id: '1',
      name: 'Celestial Diamond Necklace',
      price: 2999,
      image: '/api/placeholder/400/400',
      category: 'Necklace',
      description: 'A stunning diamond necklace inspired by the night sky'
    },
    {
      id: '2',
      name: 'Stellar Gold Bracelet',
      price: 1499,
      image: '/api/placeholder/400/400',
      category: 'Bracelet',
      description: 'Elegant gold bracelet with celestial motifs'
    },
    {
      id: '3',
      name: 'Luna Emerald Ring',
      price: 899,
      image: '/api/placeholder/400/400',
      category: 'Ring',
      description: 'Beautiful emerald ring symbolizing lunar beauty'
    }
  ];

  return (
    <>
      <Header />
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Discover Timeless Elegance</h1>
            <p>Where Luxury Meets Affordability</p>
            <p className="hero-description">
              PANSTELLIA brings you exquisite jewelry crafted with premium materials,
              designed to make every moment sparkle with celestial beauty.
            </p>
            <div className="hero-buttons">
              <Link to="/shop" className="btn btn-primary">Shop Collection</Link>
              <Link to="/about" className="btn btn-secondary">Our Story</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/api/placeholder/600/600" alt="PANSTELLIA Jewelry" />
          </div>
        </section>

        {/* USP Section */}
        <section className="usp-section">
          <div className="usp-grid">
            <div className="usp-item">
              <FaGem className="usp-icon" />
              <h3>Premium Quality</h3>
              <p>Genuine gold, diamonds, and gemstones with certificates</p>
            </div>
            <div className="usp-item">
              <FaShippingFast className="usp-icon" />
              <h3>Free Shipping</h3>
              <p>Free delivery on orders above ₹2,000 within India</p>
            </div>
            <div className="usp-item">
              <FaShieldAlt className="usp-icon" />
              <h3>Lifetime Warranty</h3>
              <p>Complete peace of mind with our comprehensive warranty</p>
            </div>
            <div className="usp-item">
              <FaStar className="usp-icon" />
              <h3>Luxury at Affordable Prices</h3>
              <p>High-end jewelry without the premium price tag</p>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="featured-section">
          <div className="section-header">
            <h2>Featured Collection</h2>
            <p>Discover our most beloved pieces</p>
          </div>
          <div className="featured-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="featured-card">
                <img src={product.image} alt={product.name} />
                <div className="featured-content">
                  <h3>{product.name}</h3>
                  <p className="price">₹{product.price.toLocaleString()}</p>
                  <p className="description">{product.description}</p>
                  <Link to="/shop" className="btn btn-outline">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shop Section */}
        <section className="shop-section">
          <div className="section-header">
            <h2>Explore Our Collection</h2>
            <p>Find the perfect piece for every occasion</p>
          </div>
          <div className="layout">
            <Sidebar setFilters={setFilters} />
            <ProductGrid filters={filters} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Shine?</h2>
            <p>Join thousands of satisfied customers who trust PANSTELLIA for their luxury jewelry needs.</p>
            <div className="cta-buttons">
              <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </section>

        {/* Instagram Gallery */}
        <InstagramGallery />
      </div>
      <Footer />
    </>
  );
}