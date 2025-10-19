import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Paradise Nursery</Link>
        <div className="navbar-nav ms-auto">
          {location.pathname !== '/' && (
            <Link className="nav-link" to="/">Home</Link>
          )}
          {location.pathname !== '/products' && (
            <Link className="nav-link" to="/products">Products</Link>
          )}
          {location.pathname !== '/cart' && (
            <Link className="nav-link" to="/cart">
              <FaShoppingCart size={20} />
              {totalItems > 0 && <span className="badge bg-primary ms-1">{totalItems}</span>}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
