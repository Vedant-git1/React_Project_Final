import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/cartSlice';
import Header from '../components/Header';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const ShoppingCart = () => {
  const { items, totalItems, totalCost } = useSelector((state) => state.cart);
  const currency = useSelector((state) => state.location.currency);
  const dispatch = useDispatch();

  const cartItems = items.filter(item => item.quantity > 0);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="row mb-4">
              <div className="col-md-6">
                <h4>Total Plants: {totalItems}</h4>
              </div>
              <div className="col-md-6 text-end">
                <h4>Total Cost: {currency}{totalCost}</h4>
              </div>
            </div>
            <div className="row">
              {cartItems.map(item => (
                <div key={item.id} className="col-md-12 mb-3">
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-md-2">
                        <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-4">
                              <h5 className="card-title">{item.name}</h5>
                              <p className="card-text">Unit Price: {currency}{item.price}</p>
                              <p className="card-text">Total: {currency}{item.price * item.quantity}</p>
                            </div>
                            <div className="col-md-4 d-flex align-items-center">
                              <button className="btn btn-outline-secondary me-2" onClick={() => handleDecrease(item.id)}>
                                <FaMinus />
                              </button>
                              <span className="mx-2">{item.quantity}</span>
                              <button className="btn btn-outline-secondary ms-2" onClick={() => handleIncrease(item.id)}>
                                <FaPlus />
                              </button>
                            </div>
                            <div className="col-md-4 d-flex align-items-center justify-content-end">
                              <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>
                                <FaTrash />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <Link to="/products" className="btn btn-secondary">Continue Shopping</Link>
              </div>
              <div className="col-md-6 text-end">
                <button className="btn btn-success">Checkout (Coming Soon)</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
