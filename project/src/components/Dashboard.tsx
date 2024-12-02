import React from 'react';
import { FileText, Shield, Users, Clock } from 'lucide-react';
import Header from './Header';
import StatsCard from './stats/StatsCard';
import DocumentGrid from './documents/DocumentGrid';
import UploadZone from './upload/UploadZone';
import React from 'react';
import Header from './Header';
import StatsCard from './stats/StatsCard';
import DocumentGrid from './documents/DocumentGrid';
import UploadZone from './upload/UploadZone';
import WalletConnector from '../context/WalletConnector'; // Import the WalletConnector component


export default Dashboard;

const mockDocuments = [
  {
    id: '1',
    name: 'US Passport',
    type: 'identity',
    dateAdded: new Date('2024-02-15'),
    expiryDate: new Date('2029-02-15'),
    status: 'verified',
    sharedWith: ['Department of State', 'Chase Bank'],
  },
  {
    id: '2',
    name: 'Stanford University Degree',
    type: 'education',
    dateAdded: new Date('2024-01-10'),
    status: 'verified',
    sharedWith: ['Tesla Inc.', 'LinkedIn'],
  },
  {
    id: '3',
    name: 'California Driver License',
    type: 'license',
    dateAdded: new Date('2024-03-01'),
    expiryDate: new Date('2025-03-01'),
    status: 'pending',
    sharedWith: [],
  },
  {
    id: '4',
    name: 'COVID-19 Vaccination Record',
    type: 'other',
    dateAdded: new Date('2024-01-05'),
    status: 'verified',
    sharedWith: ['World Health Organization'],
  },
  {
    id: '5',
    name: 'Professional Engineering License',
    type: 'license',
    dateAdded: new Date('2024-02-20'),
    expiryDate: new Date('2026-02-20'),
    status: 'verified',
    sharedWith: ['State Board', 'Current Employer'],
  },
] as const;

const Dashboard = () => {
  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header />
      
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sarah</h1>
              <p className="text-gray-600">Here's what's happening with your documents</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              icon={FileText}
              label="Total Documents"
              value="12"
              trend={{ value: 8, positive: true }}
            />
            <StatsCard
              icon={Shield}
              label="Verified Documents"
              value="9"
              trend={{ value: 12, positive: true }}
            />
            <StatsCard
              icon={Users}
              label="Shared With"
              value="6"
              trend={{ value: 2, positive: true }}
            />
            <StatsCard
              icon={Clock}
              label="Pending Verification"
              value="3"
              trend={{ value: 1, positive: false }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Documents</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View All
                  </button>
                </div>
                <DocumentGrid documents={mockDocuments} />
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <UploadZone />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
const Dashboard = () => {
  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header />
      
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sarah</h1>
              <p className="text-gray-600">Here's what's happening with your documents</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              icon={FileText}
              label="Total Documents"
              value="12"
              trend={{ value: 0, direction: 'up' }}
            />
            {/* Add more StatsCard components as needed */}
          </div>

          <WalletConnector /> {/* Include the WalletConnector here */}

          <UploadZone />
          <DocumentGrid />
        </div>
      </main>
    </div>
  );
};
export default Dashboard;