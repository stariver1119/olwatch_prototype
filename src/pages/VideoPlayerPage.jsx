import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
import { mockSeries } from '../data/mockData';

const VideoPlayerPage = () => {
    const { videoId } = useParams();
    const navigate = useNavigate();
    const [video, setVideo] = useState(null);
    const [showHeader, setShowHeader] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    // Find video data
    useEffect(() => {
        const foundVideo = mockSeries.videos.find(v => v.id === videoId);
        if (foundVideo) {
            setVideo(foundVideo);
        }
    }, [videoId]);

    // Auto-hide header logic
    useEffect(() => {
        let timeout;
        if (isPlaying && showHeader) {
            timeout = setTimeout(() => {
                setShowHeader(false);
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [isPlaying, showHeader]);

    const handleStateChange = (event) => {
        // 1 = Playing, 2 = Paused
        const playerState = event.data;
        setIsPlaying(playerState === 1);

        if (playerState !== 1) {
            setShowHeader(true);
        }
    };

    const handleNextEpisode = () => {
        if (!video) return;
        const currentIndex = mockSeries.videos.findIndex(v => v.id === video.id);
        const nextVideo = mockSeries.videos[currentIndex + 1];
        if (nextVideo) {
            navigate(`/watch/${nextVideo.id}`);
        }
    };

    const hasNextEpisode = video && mockSeries.videos.findIndex(v => v.id === video.id) < mockSeries.videos.length - 1;

    const handleInteraction = () => {
        setShowHeader(true);
    };

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            modestbranding: 1,
            rel: 0,
            controls: 1, // Keep default controls for prototype simplicity
        },
    };

    if (!video) return <div className="loading">Loading...</div>;

    return (
        <div className="video-player-page" onClick={handleInteraction}>
            {/* Overlay Header */}
            <div className={`player-header ${showHeader ? 'visible' : 'hidden'}`}>
                <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="back-button-overlay">
                    ← Back
                </button>
            </div>

            {/* Video Player Container */}
            <div className="player-container">
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    className="youtube-player"
                    onStateChange={handleStateChange}
                    onEnd={handleNextEpisode}
                />
            </div>

            {/* Video Details */}
            <div className="video-details-container">
                <div className="video-meta-top">
                    {mockSeries.tags.map((tag, index) => (
                        <span key={index} className="video-tag">#{tag}</span>
                    ))}
                </div>
                <h1 className="player-video-title">{video.title}</h1>
                <div className="video-stats-row">
                    <span className="video-stat">Episode {video.order}</span>
                    <span className="separator">•</span>
                    <span className="video-stat">{video.duration}</span>
                </div>

                <div className="action-buttons">
                    <button
                        className="btn btn-primary btn-full"
                        onClick={handleNextEpisode}
                        disabled={!hasNextEpisode}
                        style={{ opacity: hasNextEpisode ? 1 : 0.5, cursor: hasNextEpisode ? 'pointer' : 'not-allowed' }}
                    >
                        {hasNextEpisode ? 'Next Episode' : 'Last Episode'}
                    </button>
                    <button className="btn btn-secondary-icon">♥</button>
                </div>

                <p className="player-video-description">{video.description}</p>
            </div>
        </div>
    );
};

export default VideoPlayerPage;
