import React from 'react';
import { Home, FileText, Shield, Settings, Bell, LogOut } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ActiveView } from '../types';

const Sidebar = () => {
  const { activeView, setActiveView } = useApp();

  const menuItems: { icon: any; label: string; value: ActiveView }[] = [
    { icon: Home, label: 'Dashboard', value: 'dashboard' },
    { icon: FileText, label: 'Documents', value: 'documents' },
    { icon: Shield, label: 'Security', value: 'security' },
    { icon: Bell, label: 'Notifications', value: 'notifications' },
    { icon: Settings, label: 'Settings', value: 'settings' },
  ];

  const handleSignOut = () => {
    alert('Sign out functionality would be implemented here');
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold">SecureVault</h1>
      </div>
      
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => setActiveView(item.value)}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors w-full ${
                  activeView === item.value
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-8 left-6 right-6">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors w-full"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;