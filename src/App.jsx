import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SeriesPlaylistPage from './pages/SeriesPlaylistPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import MobileContainer from './components/Layout/MobileContainer';
import Header from './components/Layout/Header';

function App() {
  return (
    <MobileContainer>
      <Header />
      <Routes>
        <Route path="/" element={<SeriesPlaylistPage />} />
        <Route path="/watch/:videoId" element={<VideoPlayerPage />} />
      </Routes>
    </MobileContainer>
  );
}

export default App;
