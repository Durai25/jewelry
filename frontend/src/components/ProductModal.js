import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { FaHeart } from 'react-icons/fa';
import { useEffect } from 'react';

export default function ProductModal({ product, onClose }) {
  const { addToCart, toggleWishlist, wishlist } = useContext(StoreContext);
  const [qty, setQty] = useState(1);
  const isWishlisted = wishlist.find(i => i.id === product.id);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  if (!product) return null;

const handleAddToCart = () => {
  addToCart(product, qty);
};

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="modal-content">
          <h2>{product.name}</h2>
          {product.sale && <span className="badge">SALE -20%</span>}
          <p className="price">₹{product.price.toLocaleString()}</p>
          <p>{product.description}</p>
          <div className="wishlist-heart">
            <FaHeart 
              className={isWishlisted ? "active" : ""} 
              onClick={() => toggleWishlist(product)} 
            />
          </div>
          <div className="qty-selector">
            <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>
          <button className="add-cart-btn" onClick={handleAddToCart} disabled={product.stock === 0}>
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

