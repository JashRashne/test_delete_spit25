import React from 'react';
import { Cuboid as Cube, DoorOpen as Door, AppWindow as Window, Wallet as Wall, Users, Share2, Save, Video as Video3d } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Toolbar: React.FC = () => {
  const { toggleARMode, isARMode } = useStore();

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-2 space-y-4">
      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Add Furniture">
        <Cube className="w-6 h-6" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Add Door">
        <Door className="w-6 h-6" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Add Window">
        <Window className="w-6 h-6" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Add Wall">
        <Wall className="w-6 h-6" />
      </button>
      <hr className="border-gray-200" />
      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Collaborators">
        <Users className="w-6 h-6" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Share">
        <Share2 className="w-6 h-6" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-lg" title="Save">
        <Save className="w-6 h-6" />
      </button>
      <button 
        className={`p-2 rounded-lg ${isARMode ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        onClick={toggleARMode}
        title="AR Mode"
      >
        <Video3d className="w-6 h-6" />
      </button>
    </div>
  );
};