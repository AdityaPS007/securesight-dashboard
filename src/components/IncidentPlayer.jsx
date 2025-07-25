import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Camera } from 'lucide-react';
import { formatTime } from '../utils/helpers';

const IncidentPlayer = ({ incident }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(100);

  // Simulate video playback
  useEffect(() => {
    let interval;
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => Math.min(prev + 1, duration));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  // Reset when incident changes
  useEffect(() => {
    setCurrentTime(0);
    setIsPlaying(false);
  }, [incident]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipBack = () => {
    setCurrentTime(Math.max(0, currentTime - 10));
  };

  const handleSkipForward = () => {
    setCurrentTime(Math.min(duration, currentTime + 10));
  };

  const handleTimelineClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    setCurrentTime(Math.floor(percentage * duration));
  };

  return (
    <div className="flex-1 p-6">
      <div className="bg-gray-800 rounded-lg overflow-hidden h-full">
        {/* Video Display */}
        <div className="relative h-2/3 bg-gray-700 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Simulated CCTV feed */}
            <div className="w-full h-full bg-gray-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-800/10 to-transparent" />
              <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded text-sm font-mono">
                {incident.cameraId}
              </div>
              <div className="absolute bottom-4 right-4 bg-red-600 px-2 py-1 rounded text-xs font-bold animate-pulse">
                MANDATORY
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <div className="text-lg font-medium text-gray-300">Live Feed</div>
                  <div className="text-sm text-gray-400">{incident.location}</div>
                  <div className="text-xs text-gray-500 mt-2">{incident.type}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Controls */}
        <div className="video-controls">
          <div className="flex items-center space-x-4 mb-4">
            <button onClick={handleSkipBack} className="control-button">
              <SkipBack className="w-4 h-4" />
            </button>
            <button onClick={handlePlayPause} className="play-button">
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button onClick={handleSkipForward} className="control-button">
              <SkipForward className="w-4 h-4" />
            </button>
            <div className="flex-1 flex items-center space-x-3">
              <span className="text-sm font-mono">{formatTime(currentTime)}</span>
              <div 
                className="flex-1 h-2 bg-gray-700 rounded overflow-hidden cursor-pointer"
                onClick={handleTimelineClick}
              >
                <div 
                  className="h-full bg-blue-500 transition-all duration-100"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>
              <span className="text-sm font-mono">{formatTime(duration)}</span>
            </div>
            <button className="control-button">
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentPlayer;