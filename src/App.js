import React, { useState } from 'react';
import './App.css';
import AboutPage from './components/AboutPage';
import DashboardPage from './components/DashboardPage';
import NewsPage from './components/NewsPage';


import logo from  './utils/logo-blue.png'; // Import your logo or symbol image

function App() {
  // State to track active tab
  const [activeTab, setActiveTab] = useState('About');

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Render the corresponding page based on the active tab
  const renderPage = () => {
    switch (activeTab) {
      case 'About':
        return <AboutPage />;
      case 'Dashboard':
        return <DashboardPage />;
      case 'News':
        return <NewsPage />;
      default:
        return null;
    }
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
      {/* Render the corresponding page based on the active tab */}
      <div className="page-content">{renderPage()}</div>
    </div>
  );
}

export default App;