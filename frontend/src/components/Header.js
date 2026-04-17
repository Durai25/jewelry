import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  const { cart, total } = useContext(StoreContext);

  return (
    <header className="header">
      <Link to="/">
        <h1>Jewel Store</h1>
      </Link>
      <div className="nav">
        <Link to="/admin">Admin</Link>
        <div className="cart">
          <FaShoppingCart />
          <span>₹{total.toFixed(0)} ({cart.length})</span>
        </div>
      </div>
    </header>
  );
}
