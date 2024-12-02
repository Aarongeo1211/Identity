import React, { useCallback } from 'react';
import { Upload, File } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const UploadZone = () => {
  const { handleUpload } = useApp();

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    files.forEach(handleUpload);
  }, [handleUpload]);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach(handleUpload);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50 rounded-xl p-6">
      <h3 className="font-semibold text-gray-900 mb-2">Secure Document Upload</h3>
      <p className="text-sm text-gray-600 mb-6">
        Drag and drop your documents here. We support PDF, JPG, and PNG formats.
      </p>
      
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        className="border-2 border-dashed border-blue-200 rounded-xl p-8 text-center bg-white/50 backdrop-blur-sm transition-all hover:bg-white/80"
      >
        <Upload className="w-10 h-10 text-blue-400 mx-auto mb-4" />
        <p className="text-sm text-gray-600 mb-2">Drop your files here or</p>
        <label className="cursor-pointer">
          <span className="text-sm text-blue-600 font-medium hover:text-blue-700">
            browse files
          </span>
          <input
            type="file"
            className="hidden"
            onChange={onFileSelect}
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </label>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <File className="w-4 h-4" />
          <span className="flex-1">passport_scan.pdf</span>
          <span className="text-blue-600">84%</span>
        </div>
      </div>
    </div>
  );
};

export default UploadZone;