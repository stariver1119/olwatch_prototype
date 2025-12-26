import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video, index }) => {
    const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;

    return (
        <Link to={`/watch/${video.id}`} className="video-card-link">
            <div className="video-card">
                <div className="video-thumbnail-wrapper">
                    <div className="video-index-container">
                        <span className="video-index-large">{index + 1}</span>
                    </div>
                    <img src={thumbnailUrl} alt={video.title} className="video-thumbnail" />
                </div>
                <div className="video-info">
                    <h3 className="video-title">{video.title}</h3>
                    <p className="video-description">{video.description}</p>
                    <span className="video-duration">{video.duration}</span>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
