import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg'; // Import your logo or symbol image

function App() {
  // State to track active tab
  const [activeTab, setActiveTab] = useState('About');

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Logo or symbol image */}
        <img src={logo} alt="logo" className="header-logo" />
        {/* Header with tabs */}
        <div className="header-tabs">
          {/* About tab */}
          <button
            className={activeTab === 'About' ? 'active' : ''}
            onClick={() => handleTabChange('About')}
          >
            About
          </button>
          {/* Dashboard tab */}
          <button
            className={activeTab === 'Dashboard' ? 'active' : ''}
            onClick={() => handleTabChange('Dashboard')}
          >
            Dashboard
          </button>
          {/* News tab */}
          <button
            className={activeTab === 'News' ? 'active' : ''}
            onClick={() => handleTabChange('News')}
          >
            News
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
