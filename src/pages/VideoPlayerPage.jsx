import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockSeries } from '../data/mockData';

const VideoPlayerPage = () => {
    const { videoId } = useParams();
    const video = mockSeries.videos.find(v => v.id === videoId);

    if (!video) {
        return <div>Video not found</div>;
    }

    return (
        <div className="page-container">
            <Link to="/">Back to Series</Link>
            <h2>{video.title}</h2>
            <div className="player-wrapper">
                {/* Placeholder for YouTube Player */}
                <div style={{ background: '#000', color: '#fff', padding: '20px' }}>
                    YouTube Player Placeholder for ID: {videoId}
                </div>
            </div>
            <p>{video.description}</p>
        </div>
    );
};

export default VideoPlayerPage;
