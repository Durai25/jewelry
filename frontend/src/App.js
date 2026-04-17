import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import FAQ from "./pages/FAQ";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import TrackOrder from "./pages/TrackOrder";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import SizeGuide from "./pages/SizeGuide";
import Wholesale from "./pages/Wholesale";
import Wishlist from "./pages/Wishlist";
import { StoreProvider } from "./context/StoreContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProductModal from './components/ProductModal';
import WhatsAppButton from './components/WhatsAppButton';
import { useContext } from 'react';
import { StoreContext } from './context/StoreContext';
import "./styles/main.css";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/" />;
};

function AppContent() {
  const { selectedProduct, setSelectedProduct } = useContext(StoreContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/size-guide" element={<SizeGuide />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <StoreProvider>
        <AppContent />
      </StoreProvider>
    </AuthProvider>
  );
}
