import React from 'react';
import { FileText, Clock, Share2, Shield, ExternalLink } from 'lucide-react';
import { Document } from '../../types';
import { useApp } from '../../context/AppContext';

interface DocumentCardProps {
  document: Document;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  const { handleShare, handlePermissions, handleView } = useApp();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'expired':
        return 'bg-red-100 text-red-800 border border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {document.name}
            </h3>
            <p className="text-sm text-gray-500 capitalize">{document.type}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(document.status)}`}>
          {document.status}
        </span>
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Added {new Date(document.dateAdded).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          <span>Shared with {document.sharedWith.length}</span>
        </div>
      </div>

      {document.sharedWith.length > 0 && (
        <div className="mb-4 px-3 py-2 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 mb-2">Shared with:</p>
          <div className="flex flex-wrap gap-2">
            {document.sharedWith.map((org) => (
              <span key={org} className="text-xs bg-white px-2 py-1 rounded border">
                {org}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
        <button
          onClick={() => handleView(document.id)}
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          View
        </button>
        <div className="flex gap-3">
          <button
            onClick={() => handlePermissions(document.id)}
            className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2"
          >
            <Shield className="w-4 h-4" />
            Permissions
          </button>
          <button
            onClick={() => handleShare(document.id)}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;