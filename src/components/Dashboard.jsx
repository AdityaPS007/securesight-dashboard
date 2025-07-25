import React, { useState } from 'react';
import Navbar from './Navbar';
import IncidentPlayer from './IncidentPlayer';
import IncidentList from './IncidentList';
import Timeline from './Timeline';
import { useIncidents } from '../hooks/useIncidents';
import { mockIncidents, mockCameras } from '../data/mockData';

const Dashboard = () => {
  const { incidents, selectedIncident, selectIncident, resolveIncident } = useIncidents(mockIncidents);
  const [showTimeline, setShowTimeline] = useState(false);

  const unresolvedCount = incidents.filter(i => !i.resolved).length;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="flex h-[calc(100vh-80px)]">
        <div className="flex-1 flex">
          <IncidentPlayer incident={selectedIncident} />
          <IncidentList 
            incidents={incidents}
            selectedIncident={selectedIncident}
            onIncidentSelect={selectIncident}
            onResolveIncident={resolveIncident}
            unresolvedCount={unresolvedCount}
          />
        </div>
      </div>

      {showTimeline && (
        <Timeline onClose={() => setShowTimeline(false)} />
      )}

      {/* Camera List - Bottom Panel */}
      <div className="fixed bottom-4 left-6 right-6">
        <div className="bg-gray-800/90 backdrop-blur rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">Camera List</h3>
            <button 
              onClick={() => setShowTimeline(!showTimeline)}
              className="text-xs bg-gray-600 hover:bg-gray-500 px-2 py-1 rounded"
            >
              {showTimeline ? 'Hide Timeline' : 'Show Timeline'}
            </button>
          </div>
          <div className="flex space-x-4">
            {mockCameras.map((camera) => (
              <div key={camera.id} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">{camera.id}</span>
                <span className="text-xs text-gray-400">|</span>
                <span className="text-xs text-gray-400">{camera.location}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 text-center">
            <span className="text-sm font-bold bg-orange-600 px-3 py-1 rounded">
              OPTIONAL / EXTRA CREDIT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;