import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Only show back button if not on home page
    const showBackButton = location.pathname !== '/';

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
