import React from 'react';
import './StatCard.css';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  change: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  variant?: 'primary' | 'success' | 'warning' | 'danger';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  changeType = 'neutral',
  variant = 'primary',
}) => {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${variant}`}>{icon}</div>
      <div className="stat-content">
        <h3>{title}</h3>
        <p className="stat-value">{value}</p>
        <span className={`stat-change ${changeType}`}>{change}</span>
      </div>
    </div>
  );
};

export default StatCard;
