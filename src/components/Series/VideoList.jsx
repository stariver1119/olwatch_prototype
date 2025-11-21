import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ videos }) => {
    return (
        <div className="video-list-container">
            <h2 className="section-title">Episodes</h2>
            <div className="video-list">
                {videos.map((video, index) => (
                    <VideoCard key={video.id} video={video} index={index} />
                ))}
            </div>
        </div>
    );
};

export default VideoList;
