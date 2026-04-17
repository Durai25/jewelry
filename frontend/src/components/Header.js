import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { FaShoppingCart, FaHeart, FaChevronDown } from 'react-icons/fa';

export default function Header() {
  const { cart, total, cartCount, wishlist } = useContext(StoreContext);
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);

  const menuStructure = [
    { label: 'Home', path: '/' },
    {
      label: 'Shop',
      path: '/shop',
      submenu: [
        { label: 'All Products', path: '/shop' },
        { label: 'New Arrivals', path: '/shop?filter=new' },
        { label: 'Best Sellers', path: '/shop?filter=bestsellers' },
      ]
    },
    {
      label: 'Customer Service',
      submenu: [
        { label: 'Contact Us', path: '/contact' },
        { label: 'FAQ', path: '/faq' },
        { label: 'Shipping Info', path: '/shipping' },
        { label: 'Returns', path: '/returns' },
        { label: 'Track Order', path: '/track-order' },
      ]
    },
    {
      label: 'About',
      submenu: [
        { label: 'Our Story', path: '/about' },
        { label: 'Reviews', path: '/reviews' },
        { label: 'Blog', path: '/blog' },
        { label: 'Size Guide', path: '/size-guide' },
      ]
    },
    {
      label: 'Legal',
      submenu: [
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms & Conditions', path: '/terms' },
      ]
    },
    { label: 'Wholesale', path: '/wholesale' },
  ];

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleNavClick = () => {
    setActiveMenu(null);
  };

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={handleNavClick}>
        <h1>PANSTELLIA</h1>
      </Link>
      <nav className="nav">
        {menuStructure.map((item, index) => (
          <div key={index} className="nav-item">
            {item.submenu ? (
              <div className="nav-dropdown">
                <button 
                  className={`nav-link dropdown-toggle ${activeMenu === index ? 'active' : ''}`}
                  onClick={() => toggleMenu(index)}
                >
                  {item.label}
                  <FaChevronDown className="chevron-icon" />
                </button>
                <div className={`dropdown-menu ${activeMenu === index ? 'show' : ''}`}>
                  {item.submenu.map((subitem, subindex) => (
                    <Link 
                      key={subindex}
                      to={subitem.path}
                      className="dropdown-item"
                      onClick={handleNavClick}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link to={item.path} className="nav-link" onClick={handleNavClick}>
                {item.label}
              </Link>
            )}
          </div>
        ))}

        <div className="nav-actions">
          <Link to="/wishlist" className="wishlist-link" onClick={handleNavClick}>
            <FaHeart />
            <span className="badge-count">{wishlist.length}</span>
          </Link>
          <Link to="/checkout" className="cart-link" onClick={handleNavClick}>
            <FaShoppingCart />
            <span className="badge-count">{cart.length}</span>
            <small>₹{total.toLocaleString()}</small>
          </Link>
        </div>
      </nav>
    </header>
  );
}
