import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SeriesPlaylistPage from './pages/SeriesPlaylistPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import MobileContainer from './components/Layout/MobileContainer';
import Header from './components/Layout/Header';

import CreatorHomePage from './pages/CreatorHomePage';

function App() {
  return (
    <MobileContainer>
      <Routes>
        <Route path="/" element={<SeriesPlaylistPage />} />
        <Route path="/:creatorId" element={<CreatorHomePage />} />
        <Route path="/:creatorId/:seriesId" element={<SeriesPlaylistPage />} />
        <Route path="/watch/:videoId" element={<VideoPlayerPage />} />
      </Routes>
    </MobileContainer>
  );
}

export default App;
