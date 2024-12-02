export interface Document {
  id: string;
  name: string;
  type: 'identity' | 'education' | 'license' | 'other';
  dateAdded: Date;
  expiryDate?: Date;
  status: 'verified' | 'pending' | 'expired';
  sharedWith: string[];
}

export interface User {
  name: string;
  email: string;
  documents: Document[];
}

export type ActiveView = 'dashboard' | 'documents' | 'security' | 'notifications' | 'settings';