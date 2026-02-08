import React from 'react';
import Button from '../../Reusable/Button/Button';
import './QuickActions.css';

const QuickActions: React.FC = () => {
  const actions = [
    { label: '📋 Create Invoice', variant: 'primary' as const },
    { label: '👥 Add Patient', variant: 'secondary' as const },
    { label: '💳 Record Payment', variant: 'success' as const },
    { label: '📊 Generate Report', variant: 'warning' as const },
    { label: '📧 Send Reminder', variant: 'info' as const },
    { label: '⚙️ Settings', variant: 'dark' as const },
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h2>Quick Actions</h2>
      </div>
      <div className="card-body">
        <div className="actions-grid">
          {actions.map((action, index) => (
            <Button key={index} variant={action.variant}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
