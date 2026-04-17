import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  const { cart, total, cartCount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <header className="header">
      <Link to="/" className="logo">
        <h1>Luxury Jewels ✨</h1>
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/">Store</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/checkout" className="cart-link">
          <FaShoppingCart />
          <span>{cart.length}</span>
          <small>{cartCount ? `(${cartCount})` : ''} ₹{total.toLocaleString()}</small>
        </Link>
      </nav>
    </header>
  );
}
