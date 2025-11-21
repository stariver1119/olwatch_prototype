import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video, index }) => {
    const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`;

    return (
        <Link to={`/watch/${video.id}`} className="video-card-link">
            <div className="video-card">
                <img src={thumbnailUrl} alt={video.title} className="video-thumbnail" />
                <div className="video-info">
                    <div className="video-header">
                        <h3 className="video-title">{index + 1}. {video.title}</h3>
                        <span className="video-duration">{video.duration}</span>
                    </div>
                    <p className="video-description">{video.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
