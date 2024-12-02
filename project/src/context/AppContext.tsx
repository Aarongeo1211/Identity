import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ActiveView, Document } from '../types';

interface AppContextType {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  notifications: number;
  documents: Document[];
  handleShare: (documentId: string) => void;
  handlePermissions: (documentId: string) => void;
  handleView: (documentId: string) => void;
  handleUpload: (file: File) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

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

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [documents, setDocuments] = useState(mockDocuments);
  const [notifications] = useState(3);

  const handleShare = (documentId: string) => {
    alert(`Share dialog for document ${documentId} would open here`);
  };

  const handlePermissions = (documentId: string) => {
    alert(`Permissions dialog for document ${documentId} would open here`);
  };

  const handleView = (documentId: string) => {
    alert(`View document ${documentId} in a new tab/modal`);
  };

  const handleUpload = (file: File) => {
    alert(`Uploading file: ${file.name}`);
    // Implement actual upload logic here
  };

  return (
    <AppContext.Provider
      value={{
        activeView,
        setActiveView,
        searchQuery,
        setSearchQuery,
        notifications,
        documents,
        handleShare,
        handlePermissions,
        handleView,
        handleUpload,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};