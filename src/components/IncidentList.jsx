import React from 'react';
import { AlertTriangle, Clock, Camera, CheckCircle } from 'lucide-react';
import { getPriorityColor, getTypeIcon } from '../utils/helpers';

const IncidentList = ({ 
  incidents, 
  selectedIncident, 
  onIncidentSelect, 
  onResolveIncident, 
  unresolvedCount 
}) => {
  return (
    <div className="w-96 p-6 pl-0">
      <div className="bg-gray-800 rounded-lg h-full">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span>{unresolvedCount} Unresolved Incidents</span>
            </h2>
            <div className="text-sm text-gray-400">
              +{incidents.length - unresolvedCount} resolved incidents
            </div>
          </div>
        </div>
        
        <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-80px)]">
          {incidents.map((incident) => (
            <div 
              key={incident.id}
              onClick={() => onIncidentSelect(incident)}
              className={`incident-card ${
                selectedIncident.id === incident.id ? 'selected' : ''
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-16 h-10 bg-gray-600 rounded overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <Camera className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className={`w-2 h-2 rounded-full ${getPriorityColor(incident.priority)}`} />
                    <span className="text-sm font-medium text-orange-400 flex items-center space-x-1">
                      {getTypeIcon(incident.type)}
                      <span>{incident.type}</span>
                    </span>
                    {incident.resolved && <CheckCircle className="w-4 h-4 text-green-500" />}
                  </div>
                  <div className="text-sm text-gray-300 mb-1">{incident.location}</div>
                  <div className="text-xs text-gray-400 flex items-center space-x-1 mb-2">
                    <Clock className="w-3 h-3" />
                    <span>{incident.timestamp}</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-3">{incident.description}</div>
                  {!incident.resolved && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onResolveIncident(incident.id);
                      }}
                      className="text-xs bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded transition-colors"
                    >
                      Resolve →
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncidentList;