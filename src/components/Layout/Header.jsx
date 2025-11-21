import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Only show back button if not on home page and not on watch page (watch page has its own overlay)
    const showBackButton = location.pathname !== '/' && !location.pathname.startsWith('/watch/');

    if (!showBackButton) return null;

    return (
        <header className="app-header">
            <button onClick={() => navigate(-1)} className="back-button">
                ← Back
            </button>
        </header>
    );
};

export default Header;
