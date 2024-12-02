import React from 'react';
import { FileText, Clock, Share2, Shield } from 'lucide-react';
import { Document } from '../types';

interface DocumentCardProps {
  document: Document;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{document.name}</h3>
            <p className="text-sm text-gray-500">{document.type}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(document.status)}`}>
          {document.status}
        </span>
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Added {new Date(document.dateAdded).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          <span>Shared with {document.sharedWith.length}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end gap-3">
        <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Permissions
        </button>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>
    </div>
  );
};

export default DocumentCard;