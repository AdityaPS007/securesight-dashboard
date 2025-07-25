import { Shield, AlertTriangle, Eye, Camera } from 'lucide-react';

export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const getPriorityColor = (priority) => {
  switch (priority) {
    case 'critical': return 'bg-red-500';
    case 'high': return 'bg-orange-500';
    case 'medium': return 'bg-yellow-500';
    default: return 'bg-gray-500';
  }
};

export const getTypeIcon = (type) => {
  switch (type) {
    case 'Gun Threat': return <Shield className="w-4 h-4" />;
    case 'Unauthorised Access': return <AlertTriangle className="w-4 h-4" />;
    case 'Face Recognised': return <Eye className="w-4 h-4" />;
    default: return <Camera className="w-4 h-4" />;
  }
};

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const calculateDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return Math.floor((endDate - startDate) / 1000); // Duration in seconds
};