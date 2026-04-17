import { createContext, useState, useEffect, useContext } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Persist cart
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        } else {
          localStorage.removeItem('cart');
        }
      }
    } catch (error) {
      console.error('Failed to parse saved cart:', error);
      localStorage.removeItem('cart');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Persist wishlist
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist);
        if (Array.isArray(parsedWishlist)) {
          setWishlist(parsedWishlist);
        } else {
          localStorage.removeItem('wishlist');
        }
      }
    } catch (error) {
      console.error('Failed to parse saved wishlist:', error);
      localStorage.removeItem('wishlist');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateCartQty = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
    } else {
      setCart(prevCart => prevCart.map(item =>
        item.id === id ? { ...item, qty } : item
      ));
    }
  };

  const toggleWishlist = (product) => {
    setWishlist(prevWishlist => {
      const existing = prevWishlist.find(item => item.id === product.id);
      if (existing) {
        return prevWishlist.filter(item => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateCartQty,
    wishlist,
    toggleWishlist,
    cartCount,
    total,
    selectedProduct,
    setSelectedProduct
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

