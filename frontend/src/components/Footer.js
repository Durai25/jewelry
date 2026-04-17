import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: Add newsletter API
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Luxury Jewels</h3>
          <p>Exquisite jewelry collections crafted with passion and precision.</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@luxuryjewels.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Luxury Mall, Mumbai</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <form onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Your email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Luxury Jewels. All rights reserved.</p>
      </div>
    </footer>
  );
}
