// DashboardPage.js
import React from 'react';
import placeholderImage from '../utils/dashboard.jpeg'; // Import placeholder image
import '../styles/DashboardPage.css'; // Import CSS for styling

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <h1>Dashboard Page</h1>
      {/* Container for image and buttons */}
      <div className="dashboard-container">
        {/* Image */}
        <img src={placeholderImage} alt="Placeholder" />
        {/* Buttons */}
        <div className="dashboard-buttons">
          <button className="buy-button">BUY</button>
          <button className="sell-button">SELL</button>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
