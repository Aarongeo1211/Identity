import React from 'react';
import { Bell, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Header = () => {
  const { searchQuery, setSearchQuery, notifications } = useApp();

  const handleNotificationsClick = () => {
    alert('Notifications panel would open here');
  };

  const handleProfileClick = () => {
    alert('Profile menu would open here');
  };

  return (
    <header className="bg-white border-b border-gray-100 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="relative w-96">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search across all documents..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
        
        <div className="flex items-center gap-6">
          <button
            onClick={handleNotificationsClick}
            className="relative hover:bg-gray-50 p-2 rounded-full transition-colors"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            {notifications > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
          
          <button
            onClick={handleProfileClick}
            className="flex items-center gap-3"
          >
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Sarah Anderson</p>
              <p className="text-xs text-gray-500">Premium Account</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;