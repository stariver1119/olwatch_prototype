import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCreatorProfile, getSeriesByCreatorId } from '../data/mockData';

const CreatorHomePage = () => {
    const { creatorId } = useParams();
    const navigate = useNavigate();

    const profile = getCreatorProfile(creatorId);
    const seriesList = getSeriesByCreatorId(creatorId);

    if (!profile) {
        return (
            <div className="page-container flex-center">
                <h2 style={{ color: 'var(--text-secondary)' }}>Creator not found</h2>
            </div>
        );
    }

    return (
        <div className="creator-page-wrapper">
            {/* Creator Profile Header */}
            <div className="creator-header">
                <div className="creator-profile-top">
                    <img src={profile.avatarUrl} alt={profile.name} className="creator-avatar" />
                    <div className="creator-info">
                        <h1 className="creator-name">{profile.name}</h1>
                        <p className="creator-bio">{profile.bio}</p>
                        <div className="creator-stats">
                            <span>Subscribers {profile.stats.subscribers}</span>
                            <span className="separator">•</span>
                            <span>{seriesList.length} Series</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Separator Line */}
            <hr className="content-separator" />

            {/* Series List Section */}
            <div className="creator-content">
                <h2 className="section-title">Series</h2>
                <div className="series-grid">
                    {seriesList.map((series) => (
                        <div
                            key={series.id}
                            className="series-card"
                            onClick={() => navigate(`/${creatorId}/${series.id}`)}
                        >
                            <div className="series-thumbnail-wrapper">
                                <img src={series.thumbnailUrl} alt={series.title} className="series-thumbnail" />
                                <div className="series-overlay">
                                    <span className="play-icon">▶</span>
                                </div>
                            </div>
                            <div className="series-card-info">
                                <h3 className="series-card-title">{series.title}</h3>
                                <p className="series-card-meta">{series.totalVideos} Videos</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreatorHomePage;
