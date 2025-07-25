export const mockIncidents = [
  {
    id: 1,
    cameraId: 'Camera-01',
    type: 'Unauthorised Access',
    location: 'Shop Floor Camera A',
    timestamp: '10:58 - 14:27 on 7-Jul-2025',
    thumbnailUrl: '/api/placeholder/160/90',
    resolved: false,
    priority: 'high',
    description: 'Detected unauthorized personnel in restricted area',
    tsStart: '2025-07-07T10:58:00Z',
    tsEnd: '2025-07-07T14:27:00Z'
  },
  {
    id: 2,
    cameraId: 'Camera-02',
    type: 'Gun Threat',
    location: 'Shop Floor Camera B',
    timestamp: '10:58 - 14:27 on 7-Jul-2025',
    thumbnailUrl: '/api/placeholder/160/90',
    resolved: false,
    priority: 'critical',
    description: 'Potential weapon detected in surveillance area',
    tsStart: '2025-07-07T10:58:00Z',
    tsEnd: '2025-07-07T14:27:00Z'
  },
  {
    id: 3,
    cameraId: 'Camera-01',
    type: 'Unauthorised Access',
    location: 'Shop Floor Camera A',
    timestamp: '10:58 - 14:27 on 7-Jul-2025',
    thumbnailUrl: '/api/placeholder/160/90',
    resolved: false,
    priority: 'high',
    description: 'Multiple unauthorized entries detected',
    tsStart: '2025-07-07T10:58:00Z',
    tsEnd: '2025-07-07T14:27:00Z'
  },
  {
    id: 4,
    cameraId: 'Camera-03',
    type: 'Face Recognised',
    location: 'Shop Floor Camera C',
    timestamp: '10:58 - 14:27 on 7-Jul-2025',
    thumbnailUrl: '/api/placeholder/160/90',
    resolved: true,
    priority: 'medium',
    description: 'Known individual identified in secure zone',
    tsStart: '2025-07-07T10:58:00Z',
    tsEnd: '2025-07-07T14:27:00Z'
  },
  {
    id: 5,
    cameraId: 'Camera-02',
    type: 'Unauthorised Access',
    location: 'Shop Floor Camera B',
    timestamp: '10:58 - 14:27 on 7-Jul-2025',
    thumbnailUrl: '/api/placeholder/160/90',
    resolved: false,
    priority: 'high',
    description: 'Breach detected at main entrance',
    tsStart: '2025-07-07T10:58:00Z',
    tsEnd: '2025-07-07T14:27:00Z'
  }
];

export const mockCameras = [
  { 
    id: 'Camera-01', 
    name: 'Shop Floor A', 
    status: 'active', 
    location: 'Main Entrance' 
  },
  { 
    id: 'Camera-02', 
    name: 'Shop Floor B', 
    status: 'active', 
    location: 'Vault Area' 
  },
  { 
    id: 'Camera-03', 
    name: 'Shop Floor C', 
    status: 'active', 
    location: 'Storage Room' 
  }
];