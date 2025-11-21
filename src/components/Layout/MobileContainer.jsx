import React from 'react';

const MobileContainer = ({ children }) => {
    return (
        <div className="mobile-wrapper">
            <div className="mobile-container">
                {children}
            </div>
        </div>
    );
};

export default MobileContainer;
