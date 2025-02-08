import React from 'react';
import { useStore } from '../store/useStore';
import { 
  LayoutDashboard, 
  Users, 
  Bell,
  UserCircle
} from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold">ArchViz</h1>
          <nav className="hidden md:flex items-center space-x-4">
            <button className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center space-x-2">
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
            <button className="px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Team</span>
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <UserCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};