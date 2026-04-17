import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { FaHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist, setSelectedProduct } = useContext(StoreContext);

  const isWishlisted = wishlist.find(i => i.id === product.id);

  return (
    <div className="card product-link" title="Click for details" onClick={() => setSelectedProduct(product)}>
      {product.stock === 0 && <div className="overlay">Out of Stock</div>}
      {product.sale && <span className="badge">SALE</span>}

      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">₹{product.price.toLocaleString()}</p>

      <FaHeart
        className={`heart ${isWishlisted ? "active" : ""}`}
        onClick={(e) => e.stopPropagation() || toggleWishlist(product)}
      />

      <button 
        className="add-cart" 
        onClick={(e) => e.stopPropagation() || addToCart(product)}
        disabled={product.stock === 0}
      >
        Add to Cart
      </button>
    </div>
  );
}
