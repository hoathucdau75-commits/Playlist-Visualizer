
import React, { useState } from 'react';
import { Controls } from './components/Controls';
import { Visualizer } from './components/Visualizer';
import type { PlaylistData } from './types';
import { INITIAL_DATA } from './constants';

const App: React.FC = () => {
  const [playlistData, setPlaylistData] = useState<PlaylistData>(INITIAL_DATA);

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row">
      <div className="lg:w-[450px] lg:flex-shrink-0 bg-gray-800 shadow-lg lg:h-screen lg:overflow-y-auto">
        <Controls data={playlistData} setData={setPlaylistData} />
      </div>
      <div className="flex-1 flex items-center justify-center p-4 bg-gray-900">
        <Visualizer data={playlistData} />
      </div>
    </main>
  );
};

export default App;
