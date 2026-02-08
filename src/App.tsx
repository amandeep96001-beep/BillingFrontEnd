import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';
import InvoicesTable from './components/InvoicesTable/InvoicesTable';
import PatientsList from './components/PatientsList/PatientsList';
import QuickActions from './components/QuickActions/QuickActions';
import StatsDashboard from './components/StatsDashboard';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (!showDashboard) {
    return <LandingPage onGetStarted={() => setShowDashboard(true)} />;
  }

  return (
    <div className="App dashboard-background">
      <div className="container">
        {/* Header with Back Button */}
        <div className="top-bar">
          <button 
            className="back-button"
            onClick={() => setShowDashboard(false)}
          >
            ← Back to Home
          </button>
          <ThemeToggle />
        </div>

        {/* Header */}
        <DashboardHeader />

        {/* Dashboard Content */}
        <section className="dashboard">
          {/* Stats Cards */}
          <StatsDashboard />

          {/* Main Content Cards */}
          <div className="content-grid">
            <InvoicesTable />
            <PatientsList />
          </div>

          {/* Quick Actions */}
          <QuickActions />
        </section>
      </div>
    </div>
  );
}

export default App;
