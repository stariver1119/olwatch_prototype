import React from 'react';
import { Link } from 'react-router-dom';

const SeriesInfo = ({ series }) => {
    const firstVideoId = series.videos.length > 0 ? series.videos[0].id : null;

    return (
        <div className="series-info">
            <div className="series-thumbnail-container">
                <img src={series.thumbnailUrl} alt={series.title} className="series-thumbnail" />
            </div>
            <div className="series-details">
                <h1 className="series-title">{series.title}</h1>
                <p className="series-creator">Created by {series.creator}</p>
                <div className="series-stats">
                    <span>{series.totalVideos} Videos</span>
                    <span className="separator">·</span>
                    <span>{series.totalViews} Views</span>
                </div>
                <p className="series-description">{series.description}</p>
                <div className="series-actions">
                    {firstVideoId && (
                        <Link to={`/watch/${firstVideoId}`} className="btn btn-primary">
                            Start Watching
                        </Link>
                    )}
                    <button className="btn btn-secondary" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeriesInfo;
