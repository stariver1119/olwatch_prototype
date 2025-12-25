import React from 'react';
import { useParams } from 'react-router-dom';
import { seriesList, getSeriesById } from '../data/mockData';
import SeriesInfo from '../components/Series/SeriesInfo';
import VideoList from '../components/Series/VideoList';

const SeriesPlaylistPage = () => {
    const { creatorId, seriesId } = useParams();

    // Determine which series to show
    let displaySeries = null;
    let error = null;

    if (seriesId) {
        const foundSeries = getSeriesById(seriesId);
        if (foundSeries) {
            // Strict check: Creator ID must match
            // Note: foundSeries.creatorId might be undefined for legacy data, so we check if it exists
            if (foundSeries.creatorId && foundSeries.creatorId === creatorId) {
                displaySeries = foundSeries;
            } else if (!foundSeries.creatorId) {
                // For legacy data without creatorId, we might allow it or strictly fail.
                // Given the requirement, let's allow it ONLY if the URL doesn't have a creatorId either (which isn't possible with current route) 
                // OR if we decided to update all data.
                // For now, let's assume all valid series MUST have a creatorId equal to the URL param.
                error = "Series does not belong to this creator.";
            } else {
                error = "Series not found for this creator.";
            }
        } else {
            error = "Series not found.";
        }
    } else {
        // Fallback or Home page logic
        // If accessed via root '/', there is no creatorId or seriesId.
        // We can default to the first series OR show a "Welcome" state.
        // For prototype compatibility, default to first series.
        displaySeries = seriesList[0];
    }

    if (error) {
        return (
            <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', textAlign: 'center' }}>
                <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>⚠️ Error</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{error}</p>
                <button
                    onClick={() => window.history.back()}
                    style={{
                        padding: '0.8rem 1.5rem',
                        background: 'var(--primary)',
                        border: 'none',
                        borderRadius: '8px',
                        color: 'white',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Go Back
                </button>
            </div>
        );
    }

    if (!displaySeries) return <div>Loading...</div>;

    return (
        <div className="page-container">
            <SeriesInfo series={displaySeries} />
            <VideoList videos={displaySeries.videos} />
        </div>
    );
};

export default SeriesPlaylistPage;
