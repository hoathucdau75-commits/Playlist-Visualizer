
import React from 'react';
import { PlayIcon, PauseIcon, SkipBackIcon, SkipForwardIcon, ShuffleIcon, RepeatIcon } from './Icons';

interface PlayerBarProps {
  currentSong: string;
}

export const PlayerBar: React.FC<PlayerBarProps> = ({ currentSong }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/50 backdrop-blur-md flex items-center px-4 text-white">
      <div className="flex items-center gap-4 w-1/4">
        <span className="text-sm">0:05</span>
        <div className="w-full bg-gray-600 rounded-full h-1">
          <div className="bg-white h-1 rounded-full" style={{ width: '1%' }}></div>
        </div>
        <span className="text-sm">1:22:14</span>
      </div>

      <div className="flex-1 flex items-center justify-center gap-2">
        <button className="hidden md:block text-gray-300 hover:text-white transition-colors">
            <SkipBackIcon className="h-5 w-5" />
        </button>
        <span className="text-sm font-bold truncate max-w-xs hidden lg:block">{currentSong.split('.').slice(1).join('.').trim()}</span>
         <button className="block md:hidden text-gray-300 hover:text-white transition-colors">
            <SkipBackIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="w-1/3 flex items-center justify-center gap-4">
        <button className="text-gray-300 hover:text-white transition-colors">
          <ShuffleIcon className="h-5 w-5" />
        </button>
        <button className="text-gray-300 hover:text-white transition-colors">
          <SkipBackIcon className="h-6 w-6" />
        </button>
        <button className="bg-white text-black rounded-full p-2 hover:scale-105 transition-transform">
          <PauseIcon className="h-8 w-8" />
        </button>
        <button className="text-gray-300 hover:text-white transition-colors">
          <SkipForwardIcon className="h-6 w-6" />
        </button>
        <button className="text-gray-300 hover:text-white transition-colors">
          <RepeatIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
