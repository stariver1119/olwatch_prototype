import React from 'react';
import { mockSeries } from '../data/mockData';
import SeriesInfo from '../components/Series/SeriesInfo';
import VideoList from '../components/Series/VideoList';

const SeriesPlaylistPage = () => {
    return (
        <div className="page-container">
            <SeriesInfo series={mockSeries} />
            <VideoList videos={mockSeries.videos} />
        </div>
    );
};

export default SeriesPlaylistPage;
