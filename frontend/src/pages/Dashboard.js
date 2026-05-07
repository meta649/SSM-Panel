import React from 'react';

const Dashboard = () => {
  return (
    <div className="container">
      <div style={{ padding: '3rem 0' }}>
        <h1>User Dashboard</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3>💰 Wallet Balance</h3>
            <p style={{ fontSize: '2rem', color: '#4CAF50', fontWeight: 'bold' }}>₹0</p>
          </div>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3>📦 Total Orders</h3>
            <p style={{ fontSize: '2rem', color: '#4CAF50', fontWeight: 'bold' }}>0</p>
          </div>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3>✅ Completed</h3>
            <p style={{ fontSize: '2rem', color: '#4CAF50', fontWeight: 'bold' }}>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
