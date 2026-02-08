import React from 'react';
import Button from '../../Reusable/Button/Button';
import './InvoicesTable.css';

interface Invoice {
  id: string;
  patientName: string;
  amount: string;
  date: string;
  status: 'paid' | 'pending' | 'rejected';
}

const InvoicesTable: React.FC = () => {
  const invoices: Invoice[] = [
    {
      id: '#INV-2024-001',
      patientName: 'John Doe',
      amount: '$1,250.00',
      date: 'Jan 20, 2024',
      status: 'paid',
    },
    {
      id: '#INV-2024-002',
      patientName: 'Jane Smith',
      amount: '$2,500.00',
      date: 'Jan 19, 2024',
      status: 'pending',
    },
    {
      id: '#INV-2024-003',
      patientName: 'Mike Johnson',
      amount: '$890.50',
      date: 'Jan 18, 2024',
      status: 'paid',
    },
    {
      id: '#INV-2024-004',
      patientName: 'Sarah Williams',
      amount: '$3,120.00',
      date: 'Jan 17, 2024',
      status: 'rejected',
    },
  ];

  const getStatusBadgeClass = (status: string): string => {
    switch (status) {
      case 'paid':
        return 'badge-success';
      case 'pending':
        return 'badge-warning';
      case 'rejected':
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  };

  return (
    <div className="card main-card">
      <div className="card-header">
        <h2>Recent Invoices</h2>
        <Button variant="primary" size="sm">
          View All
        </Button>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Patient Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.patientName}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.date}</td>
                <td>
                  <span className={`badge ${getStatusBadgeClass(invoice.status)}`}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesTable;
