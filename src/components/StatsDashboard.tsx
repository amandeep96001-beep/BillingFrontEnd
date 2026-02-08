import React from 'react';
import StatCard from './StatCard/StatCard';
import './StatsDashboard/StatsDashboard.css';

const StatsDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$125,430',
      icon: '💰',
      change: '↑ 12.5% this month',
      changeType: 'positive' as const,
      variant: 'primary' as const,
    },
    {
      title: 'Paid Claims',
      value: '1,256',
      icon: '✓',
      change: '↑ 8.3% this month',
      changeType: 'positive' as const,
      variant: 'success' as const,
    },
    {
      title: 'Pending Claims',
      value: '342',
      icon: '⏳',
      change: 'Awaiting review',
      changeType: 'neutral' as const,
      variant: 'warning' as const,
    },
    {
      title: 'Rejected Claims',
      value: '28',
      icon: '✕',
      change: '↑ 3.2% this month',
      changeType: 'negative' as const,
      variant: 'danger' as const,
    },
  ];

  return (
    <div className="stats-dashboard">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          change={stat.change}
          changeType={stat.changeType}
          variant={stat.variant}
        />
      ))}
    </div>
  );
};

export default StatsDashboard;
