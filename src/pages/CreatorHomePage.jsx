import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCreatorProfile, getSeriesByCreatorId } from '../data/mockData';

const CreatorHomePage = () => {
    const { creatorId } = useParams();
    const navigate = useNavigate();

    const profile = getCreatorProfile(creatorId);
    const allSeries = getSeriesByCreatorId(creatorId);

    if (!profile) {
        return (
            <div className="page-container flex-center">
                <h2 style={{ color: 'var(--text-secondary)' }}>Creator not found</h2>
            </div>
        );
    }

    // Default to "All Series" if no sections defined
    const sections = profile.sections || [{ title: 'All Series', type: 'all' }];

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
                            <span>{allSeries.length} Series</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="content-separator" />

            {/* Sections */}
            <div className="creator-content">
                {sections.map((section, index) => {
                    let sectionSeries = [];
                    if (section.type === 'all') {
                        sectionSeries = allSeries;
                    } else if (section.type === 'genre') {
                        sectionSeries = allSeries.filter(s => s.genre === section.value);
                    }

                    if (sectionSeries.length === 0) return null;

                    return (
                        <div key={index} className="series-section">
                            <h2 className="section-title">{section.title}</h2>
                            <div className="section-row-container">
                                <div className="section-row">
                                    {sectionSeries.map((series) => (
                                        <div
                                            key={series.id}
                                            className="series-card-horizontal"
                                            onClick={() => navigate(`/${creatorId}/${series.id}`)}
                                        >
                                            <div className="series-thumbnail-wrapper-horizontal">
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
                })}
            </div>
        </div>
    );
};

export default CreatorHomePage;
