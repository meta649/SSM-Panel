import React, { useState, useEffect } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch services from API
    // const fetchServices = async () => {
    //   try {
    //     const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/services`);
    //     const data = await response.json();
    //     setServices(data);
    //   } catch (error) {
    //     console.error('Error fetching services:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchServices();

    // Dummy data for now
    setServices([
      { id: 1, name: 'Instagram Followers', price: '₹500', description: 'Get real Instagram followers' },
      { id: 2, name: 'Instagram Likes', price: '₹100', description: 'Increase your Instagram likes' },
      { id: 3, name: 'YouTube Subscribers', price: '₹800', description: 'Grow your YouTube channel' },
    ]);
    setLoading(false);
  }, []);

  if (loading) return <div className="container"><p>Loading services...</p></div>;

  return (
    <div className="container">
      <div style={{ padding: '3rem 0' }}>
        <h1>Our Services</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          {services.map((service) => (
            <div key={service.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p style={{ fontSize: '1.5rem', color: '#4CAF50', fontWeight: 'bold', margin: '1rem 0' }}>{service.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
