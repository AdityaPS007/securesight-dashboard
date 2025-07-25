import React from 'react';

const timelineData = [
  { time: '09:00', incidents: 0 },
  { time: '10:00', incidents: 2 },
  { time: '11:00', incidents: 1 },
  { time: '12:00', incidents: 0 },
  { time: '13:00', incidents: 3 },
  { time: '14:00', incidents: 1 },
  { time: '15:00', incidents: 0 },
  { time: '16:00', incidents: 2 },
  { time: '17:00', incidents: 1 },
  { time: '18:00', incidents: 0 },
  { time: '19:00', incidents: 2 },
  { time: '20:00', incidents: 0 }
];

const Timeline = ({ onClose }) => {
  const maxIncidents = Math.max(...timelineData.map(d => d.incidents));

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4 z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">24-Hour Incident Timeline</h3>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white text-2xl leading-none"
        >
          ×
        </button>
      </div>
      
      {/* SVG Timeline Ruler */}
      <div className="mb-4">
        <svg width="100%" height="60" className="overflow-visible">
          {/* Background grid */}
          <defs>
            <pattern id="grid" width="50" height="10" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 10" fill="none" stroke="#374151" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="60" fill="url(#grid)" />
          
          {/* Timeline bars */}
          {timelineData.map((data, index) => {
            const barWidth = `${100 / timelineData.length}%`;
            const barHeight = maxIncidents > 0 ? (data.incidents / maxIncidents) * 40 : 0;
            const x = `${(index / timelineData.length) * 100}%`;
            
            return (
              <g key={index}>
                {/* Bar */}
                <rect
                  x={x}
                  y={40 - barHeight}
                  width="30"
                  height={barHeight}
                  fill="#3b82f6"
                  className="hover:fill-blue-400 transition-colors cursor-pointer"
                />
                {/* Time label */}
                <text
                  x={`${(index / timelineData.length) * 100 + 2}%`}
                  y="55"
                  fill="#9ca3af"
                  fontSize="10"
                  textAnchor="start"
                >
                  {data.time}
                </text>
                {/* Incident count */}
                {data.incidents > 0 && (
                  <text
                    x={`${(index / timelineData.length) * 100 + 2}%`}
                    y={35 - barHeight}
                    fill="#ffffff"
                    fontSize="8"
                    textAnchor="start"
                  >
                    {data.incidents}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span>Incidents per hour</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>Total incidents today: {timelineData.reduce((sum, d) => sum + d.incidents, 0)}</span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;