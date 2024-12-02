import React from 'react';
import { Plus, Filter } from 'lucide-react';
import Header from '../Header';
import DocumentGrid from './DocumentGrid';
import { useApp } from '../../context/AppContext';

const Documents = () => {
  const { documents } = useApp();

  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header />
      
      <main className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Documents</h1>
              <p className="text-gray-600">Manage and organize your secure documents</p>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filter
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Document
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <DocumentGrid documents={documents} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Documents;