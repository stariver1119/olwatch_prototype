import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video, index }) => {
    return (
        <Link to={`/watch/${video.id}`} className="video-card-link">
            <div className="video-card">
                <div className="video-index">{index + 1}</div>
                <div className="video-info">
                    <div className="video-header">
                        <h3 className="video-title">{video.title}</h3>
                        <span className="video-duration">{video.duration}</span>
                    </div>
                    <p className="video-description">{video.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
