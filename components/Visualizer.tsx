
import React from 'react';
import type { PlaylistData } from '../types';
import { PlayerBar } from './PlayerBar';

interface VisualizerProps {
  data: PlaylistData;
}

export const Visualizer: React.FC<VisualizerProps> = ({ data }) => {
  // Split songs into two columns
  const midPoint = Math.ceil(data.songs.length / 2);
  const firstColumnSongs = data.songs.slice(0, midPoint);
  const secondColumnSongs = data.songs.slice(midPoint);

  return (
    <div className="aspect-[16/9] w-full max-w-7xl shadow-2xl rounded-lg overflow-hidden">
        <div
        className="relative w-full h-full bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
        >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex">
            <div className="w-[20%] bg-black/30 backdrop-blur-sm" />
            <div className="relative flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            {data.logoImage && <img src={data.logoImage} alt="Logo" className="absolute top-4 right-4 md:top-6 md:right-6 w-16 h-16 rounded-full" />}
            
            <div className="mb-6">
                <div className="inline-block border border-white py-1 px-4 text-center text-sm md:text-base tracking-widest">
                {data.subtitle}
                </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
                {data.title}
            </h1>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm md:text-base font-semibold">
                <div>
                {firstColumnSongs.map(song => (
                    <p key={song.id} className="truncate">{song.title}</p>
                ))}
                </div>
                <div>
                {secondColumnSongs.map(song => (
                    <p key={song.id} className="truncate">{song.title}</p>
                ))}
                </div>
            </div>
            </div>
        </div>
        <PlayerBar currentSong={data.songs[0]?.title || 'Select a song'} />
        </div>
    </div>
  );
};
