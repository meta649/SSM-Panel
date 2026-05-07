import React from 'react';

const Cart = () => {
  return (
    <div className="container">
      <div style={{ padding: '3rem 0' }}>
        <h1>Shopping Cart</h1>
        <div style={{ marginTop: '2rem', background: 'white', padding: '2rem', borderRadius: '10px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>Your cart is empty</p>
          <p style={{ marginTop: '1rem' }}>
            <a href="/services" className="btn">Continue Shopping</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
