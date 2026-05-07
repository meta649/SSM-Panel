import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div style={{ padding: '3rem 0', textAlign: 'center' }}>
        <h1>Welcome to SSM Panel</h1>
        <p style={{ fontSize: '1.1rem', margin: '1rem 0', color: '#666' }}>
          Professional Social Media Marketing Services
        </p>
        
        <div style={{ margin: '2rem 0' }}>
          <Link to="/services" className="btn" style={{ marginRight: '1rem' }}>
            Browse Services
          </Link>
          <Link to="/register" className="btn">
            Get Started
          </Link>
        </div>

        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '2rem', background: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3>⚡ Fast Delivery</h3>
            <p>Get your orders completed in minutes</p>
          </div>
          <div style={{ padding: '2rem', background: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3>💰 Affordable Prices</h3>
            <p>Best rates in the industry</p>
          </div>
          <div style={{ padding: '2rem', background: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3>🛡️ 100% Safe</h3>
            <p>Secure and reliable service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
