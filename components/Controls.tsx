
import React from 'react';
import type { PlaylistData } from '../types';
import { INITIAL_SONGS_TEXT } from '../constants';

interface ControlsProps {
  data: PlaylistData;
  setData: React.Dispatch<React.SetStateAction<PlaylistData>>;
}

const InputField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string }> = ({ label, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const TextAreaField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; rows: number }> = ({ label, value, onChange, rows }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
        <textarea
            value={value}
            onChange={onChange}
            rows={rows}
            className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter one song per line..."
        />
    </div>
);

export const Controls: React.FC<ControlsProps> = ({ data, setData }) => {

  const handleSongsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const songsText = e.target.value;
    const songs = songsText
      .split('\n')
      .map((title, index) => ({ id: index + 1, title: title.trim() }))
      .filter(song => song.title);
    setData(prevData => ({ ...prevData, songs }));
  };
  
  const getSongsAsText = () => {
      return data.songs.map(song => song.title).join('\n');
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">Customize Playlist</h2>
      <InputField
        label="Background Image URL"
        value={data.backgroundImage}
        onChange={e => setData(prev => ({ ...prev, backgroundImage: e.target.value }))}
        placeholder="https://images.unsplash.com/..."
      />
      <InputField
        label="Logo Image URL"
        value={data.logoImage}
        onChange={e => setData(prev => ({ ...prev, logoImage: e.target.value }))}
        placeholder="https://i.imgur.com/..."
      />
      <InputField
        label="Subtitle"
        value={data.subtitle}
        onChange={e => setData(prev => ({ ...prev, subtitle: e.target.value }))}
      />
      <InputField
        label="Main Title"
        value={data.title}
        onChange={e => setData(prev => ({ ...prev, title: e.target.value }))}
      />
      <TextAreaField
        label="Song List"
        value={getSongsAsText()}
        onChange={handleSongsChange}
        rows={12}
      />
    </div>
  );
};
