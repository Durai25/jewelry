import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useContext(StoreContext);

  if (wishlist.length === 0) {
    return (
      <>
        <Header />
        <div className="page wishlist">
          <header className="page-header">
            <h1>My Wishlist</h1>
            <p>Your favorite pieces await</p>
          </header>
          <div className="page-content">
            <div className="empty-wishlist">
              <FaHeart className="empty-icon" />
              <h2>Your wishlist is empty</h2>
              <p>Start adding items you love to your wishlist</p>
              <a href="/shop" className="btn btn-primary">Browse Collection</a>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="page wishlist">
        <header className="page-header">
          <h1>My Wishlist</h1>
          <p>{wishlist.length} item{wishlist.length > 1 ? 's' : ''} in your wishlist</p>
        </header>
        <div className="page-content">
          <div className="wishlist-grid">
            {wishlist.map(product => (
              <div key={product.id} className="wishlist-card">
                <div className="wishlist-image">
                  <img src={product.image} alt={product.name} />
                  <button
                    className="remove-wishlist"
                    onClick={() => toggleWishlist(product)}
                    aria-label="Remove from wishlist"
                  >
                    <FaHeart />
                  </button>
                </div>
                <div className="wishlist-content">
                  <h3>{product.name}</h3>
                  <p className="price">₹{product.price.toLocaleString()}</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}