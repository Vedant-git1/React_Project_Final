import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page" style={{
      backgroundImage: 'url(/nursery-background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1 className="display-1 mb-4">Paradise Nursery</h1>
        <p className="lead mb-4">
          Welcome to Paradise Nursery, your ultimate destination for beautiful houseplants.
          Discover a wide variety of lush greenery to bring nature into your home.
        </p>
        <Link to="/products" className="btn btn-primary btn-lg">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
