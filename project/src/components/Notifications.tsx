import React from 'react';
import { Bell, Shield, FileText, Share2 } from 'lucide-react';
import Header from './Header';

const notifications = [
  {
    id: 1,
    type: 'security',
    title: 'New device logged in',
    message: 'A new device was used to access your account from San Francisco, CA',
    time: '2 hours ago',
    icon: Shield,
  },
  {
    id: 2,
    type: 'document',
    title: 'Document verified',
    message: 'Your passport has been successfully verified',
    time: '5 hours ago',
    icon: FileText,
  },
  {
    id: 3,
    type: 'share',
    title: 'Document shared',
    message: 'Chase Bank accessed your driver\'s license',
    time: '1 day ago',
    icon: Share2,
  },
];

const Notifications = () => {
  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header />
      
      <main className="p-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
              <p className="text-gray-600">Stay updated on your document activity</p>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Mark all as read
            </button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <notification.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
                    <p className="text-gray-400 text-sm mt-2">{notification.time}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Bell className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notifications;