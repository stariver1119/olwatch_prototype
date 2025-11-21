import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SeriesPlaylistPage from './pages/SeriesPlaylistPage';
import VideoPlayerPage from './pages/VideoPlayerPage';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<SeriesPlaylistPage />} />
        <Route path="/watch/:videoId" element={<VideoPlayerPage />} />
      </Routes>
    </div>
  );
}

export default App;
