import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const GoogleAnalytics = () => {
    useEffect(() => {
        ReactGA.initialize('G-1G3PK2F25P');
    }, []);

    return null; // This component doesn't render anything
};

export default GoogleAnalytics;