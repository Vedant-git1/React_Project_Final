import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import Header from '../components/Header';

const ProductListing = () => {
  const items = useSelector((state) => state.cart.items);
  const currency = useSelector((state) => state.location.currency);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(items.map(item => item.category))];
  const filteredItems = selectedCategory === 'All' ? items : items.filter(item => item.category === selectedCategory);

  const handleAddToCart = (id) => {
    dispatch(addToCart({ id }));
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="mb-4">Our Houseplants</h2>
        <div className="mb-4">
          {categories.map(category => (
            <button
              key={category}
              className={`btn me-2 ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="row">
          {filteredItems.map(item => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={item.image} className="card-img-top" alt={item.name} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{currency}{item.price}</p>
                  <button
                    className="btn btn-success mt-auto"
                    onClick={() => handleAddToCart(item.id)}
                    disabled={item.quantity > 0}
                  >
                    {item.quantity > 0 ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
