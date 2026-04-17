import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { FaHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useContext(StoreContext);

  const isWishlisted = wishlist.find(i => i.id === product.id);

  return (
    <div className="card">
      {product.stock === 0 && <div className="overlay">Out of Stock</div>}
      {product.sale && <span className="badge">SALE</span>}

      <img src={product.image} alt="" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <FaHeart
        className={isWishlisted ? "heart active" : "heart"}
        onClick={() => toggleWishlist(product)}
      />

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}