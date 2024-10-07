'use client'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const GoogleAnalytics = () => {
    useEffect(() => {
        ReactGA.initialize('9777726267');
    }, []);

    return null;
};

export default GoogleAnalytics;