import React from 'react';
import Button from '../../Reusable/Button/Button';
import './PatientsList.css';

interface Patient {
  id: string;
  name: string;
  patientId: string;
  insurance: string;
  initials: string;
}

const PatientsList: React.FC = () => {
  const patients: Patient[] = [
    {
      id: '1',
      name: 'John Doe',
      patientId: 'PT-2024-001',
      insurance: 'Blue Cross',
      initials: 'JD',
    },
    {
      id: '2',
      name: 'Jane Smith',
      patientId: 'PT-2024-002',
      insurance: 'Aetna',
      initials: 'JS',
    },
    {
      id: '3',
      name: 'Mike Wilson',
      patientId: 'PT-2024-003',
      insurance: 'Cigna',
      initials: 'MW',
    },
  ];

  return (
    <div className="card main-card">
      <div className="card-header">
        <h2>Active Patients</h2>
        <Button variant="success" size="sm">
          Add Patient
        </Button>
      </div>
      <div className="card-body">
        <div className="patient-list">
          {patients.map((patient) => (
            <div key={patient.id} className="patient-item">
              <div className="patient-avatar">{patient.initials}</div>
              <div className="patient-info">
                <h4>{patient.name}</h4>
                <p>
                  ID: {patient.patientId} | Insurance: {patient.insurance}
                </p>
              </div>
              <div className="patient-actions">
                <Button variant="primary" size="sm">
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientsList;
