import { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const toggleWishlist = (item) => {
    setWishlist(prev =>
      prev.find(i => i.id === item.id)
        ? prev.filter(i => i.id !== item.id)
        : [...prev, item]
    );
  };

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  return (
    <StoreContext.Provider value={{
      cart, addToCart, removeFromCart,
      wishlist, toggleWishlist,
      total
    }}>
      {children}
    </StoreContext.Provider>
  );
};