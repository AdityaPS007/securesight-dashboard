// API configuration for different environments
const getApiUrl = () => {
  // In production (Vercel), the API is on the same domain
  if (import.meta.env.PROD) {
    return ''; // Same domain, no need for full URL
  }
  
  // In development, API runs on different port
  return import.meta.env.VITE_API_URL || 'http://localhost:5000';
};

export const API_BASE_URL = getApiUrl();

// API helper functions
export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}/api${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  const response = await fetch(url, { ...defaultOptions, ...options });
  
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }
  
  return response.json();
};

// Specific API functions
export const fetchIncidents = (resolved = false) => 
  apiCall(`/incidents?resolved=${resolved}`);

export const resolveIncident = (id) => 
  apiCall(`/incidents/${id}/resolve`, { method: 'PATCH' });

export const fetchCameras = () => 
  apiCall('/cameras');