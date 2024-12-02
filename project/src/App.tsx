import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Documents from './components/documents';
import Security from './components/Security';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import { AppProvider, useApp } from './context/AppContext';
import { WalletProvider } from './context/WalletContext';
 // Assuming you have this component already


const AppContent = () => {
  const { activeView } = useApp();

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'documents':
        return <Documents />;
      case 'security':
        return <Security />;
      case 'notifications':
        return <Notifications />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      {renderView()}
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
const App: React.FC = () => {
  return (
    <WalletProvider>
      <Dashboard />
    </WalletProvider>
  );
};
export default App;