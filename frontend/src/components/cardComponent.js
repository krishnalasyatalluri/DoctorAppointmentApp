import React from 'react';

const CardComponent = () => {
  const cardStyle = {
    width: '18rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const headerStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px'
  };

  const listItemStyle = {
    backgroundColor: '#f8f9fa',
    border: 'none',
    color: '#333'
  };

  const featuredItemStyle = {
    backgroundColor: '#007bff',
    color: '#fff'
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-header" style={headerStyle}>
        Featured
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" style={featuredItemStyle}>An item</li>
        <li className="list-group-item" style={listItemStyle}>A second item</li>
        <li className="list-group-item" style={listItemStyle}>A third item</li>
      </ul>
    </div>
  );
};

export default CardComponent;
