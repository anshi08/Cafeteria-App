import React from 'react';
import './Inventory.css';

function Inventory() {
  // fetch this sampleOrders form firebase in real time
  const sampleOrders = [
    {
      "name": "Samosa",
      "price": "20",
      "availability": true
    },
    {
      "name": "Pizza",
      "price": "20",
      "availability": true
    },
    {
      "name": "Tacos",
      "price": "10",
      "availability": true
    },
    {
      "name": "Kachori",
      "price": "20",
      "availability": true
    },
    {
      "name": "Tea",
      "price": "10",
      "availability": true
    },
    {
      "name": "Sandwich",
      "price": "20",
      "availability": true
    },
    {
      "name": "Cold Drink",
      "price": "40",
      "availability": true
    }
  ];


  return (
    <div className="inventory-container">
      <h2 className="inventory-title">Inventory</h2>
      <div className="tabs-container">
        {sampleOrders.map((order, index) => (
          <div className="inventory-card" key={index}>
            <div className="inventory-detail">
              <p><strong>{order.name}</strong></p>
              <p><strong>Price:</strong> {order.price}</p>
              <p><strong>Availability:</strong> {order.availability ? 'Available' : 'Not Available'}</p>
            </div>
            <div className="quantity-control">
                <label htmlFor={`quantity-${index}`}>Update Inventory:</label>
                <input
                  type="text"
                  id={`quantity-${index}`}
                />
                <div className="quantity-buttons">
                  <button>+</button>
                  <button>-</button>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inventory;
