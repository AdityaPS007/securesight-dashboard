import React from 'react';
import { Shield, Settings, Camera, AlertTriangle, Users } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold">MANDLACX</span>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <button className="flex items-center space-x-1 px-3 py-2 rounded bg-blue-800 hover:bg-blue-700">
            <Settings className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 rounded hover:bg-blue-800">
            <Camera className="w-4 h-4" />
            <span>Cameras</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 rounded hover:bg-blue-800">
            <Shield className="w-4 h-4" />
            <span>Scenes</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 rounded hover:bg-blue-800">
            <AlertTriangle className="w-4 h-4" />
            <span>Incidents</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 rounded hover:bg-blue-800">
            <Users className="w-4 h-4" />
            <span>Users</span>
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="text-sm text-right">
          <div className="font-medium">Mohammad Abbas</div>
          <div className="text-blue-300">admin@securesight.com</div>
        </div>
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          MA
        </div>
      </div>
    </nav>
  );
};

export default Navbar;