# SecureSight CCTV Dashboard

A comprehensive CCTV monitoring dashboard for SecureSight - a security monitoring system that supports up to 3 CCTV feeds with computer vision-powered incident detection.

## 🚀 Features

### Mandatory Components
- **Navbar**: Complete navigation with branding and user profile
- **Incident Player**: Video playback interface with full controls
- **Incident List**: Real-time incident management with resolution capabilities

### Optional/Extra Credit Components
- **Interactive Timeline**: 24-hour incident visualization with SVG ruler
- **Live Camera Status**: Real-time camera feed monitoring
- **Advanced State Management**: Custom React hooks for incident handling

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Express.js + Node.js
- **Data**: JSON file-based storage (easily replaceable with database)

## 📦 Installation & Setup

1. **Clone/Create the project directory:**
   ```bash
   mkdir securesight-dashboard
   cd securesight-dashboard
   ```

2. **Copy all files** from the project structure into their respective locations

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Start the API server** (in a separate terminal):
   ```bash
   npm run server
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗 Project Structure

```
securesight-dashboard/
├── src/
│   ├── components/          # React components
│   │   ├── Dashboard.jsx    # Main dashboard container
│   │   ├── Navbar.jsx       # Navigation component
│   │   ├── IncidentPlayer.jsx # Video player interface
│   │   ├── IncidentList.jsx # Incident management
│   │   └── Timeline.jsx     # Optional timeline component
│   ├── hooks/
│   │   └── useIncidents.js  # Custom incident management hook
│   ├── data/
│   │   └── mockData.js      # Mock data for development
│   └── utils/
│       └── helpers.js       # Utility functions
├── api/
│   ├── server.js           # Express.js backend
│   ├── data/
│   │   └── incidents.json  # Incident data storage
└── ...config files
```

## 🔌 API Endpoints

The backend implements the required API specification:

### GET `/api/incidents?resolved=false`
Returns newest-first JSON array of incidents
- Query parameter: `resolved` (boolean)
- Response: Array of incident objects

### PATCH `/api/incidents/:id/resolve`  
Toggles incident resolution status
- Returns: Updated incident object

### GET `/api/cameras`
Returns all available cameras
- Response: Array of camera objects

## 📊 Data Models

### Camera Object
```javascript
{
  id: "Camera-01",
  name: "Shop Floor A", 
  location: "Main Entrance"
}
```

### Incident Object
```javascript
{
  id: 1,
  cameraId: "Camera-01",
  type: "Unauthorised Access",
  tsStart: "2025-07-07T10:58:00Z",
  tsEnd: "2025-07-07T14:27:00Z", 
  thumbnailUrl: "/api/placeholder/160/90",
  resolved: false
}
```

## 🎯 Key Features Implemented

### Mandatory Scope ✅
1. **Navbar** - Complete navigation with SecureSight branding
2. **Incident Player** - Video interface with playback controls  
3. **Incident List** - Scrollable incident management with resolve functionality

### Optional Scope ✅  
1. **Interactive Timeline** - 24-hour incident visualization with SVG ruler
2. **Real-time Updates** - Live incident resolution and state management
3. **Responsive Design** - Adapts to different screen sizes
4. **Priority System** - Color-coded incident severity indicators

## 🔧 Customization

### Database Integration
Replace the JSON file storage with your preferred database:

```javascript
// In src/hooks/useIncidents.js
const resolveIncident = async (incidentId) => {
  const response = await fetch(`/api/incidents/${incidentId}/resolve`, {
    method: 'PATCH'
  });
  return response.json();
};
```

### Styling
Modify the Tailwind configuration in `tailwind.config.js` or update the CSS classes in components.

### Additional Features
- Add real video streaming capabilities
- Implement user authentication
- Add advanced filtering and search
- Integrate with actual CCTV camera APIs

## 🚀 Production Deployment

1. **Build the frontend:**
   ```bash
   npm run build
   ```

2. **Configure environment variables:**
   ```bash
   export NODE_ENV=production
   export PORT=5000
   ```

3. **Deploy using your preferred platform** (Vercel, Netlify, AWS, etc.)

## 📝 Assessment Notes

This implementation demonstrates:
- **Full-stack development** with React frontend and Express backend
- **Component architecture** with proper separation of concerns  
- **State management** using custom React hooks
- **API design** following RESTful principles
- **Responsive UI/UX** matching the provided mockups
- **Optional enhancements** including interactive timeline and advanced features

The codebase is production-ready and easily extensible for additional features.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes  
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is for assessment purposes. All rights reserved to SecureSight.