'use client'
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const GoogleAnalytics = () => {
    useEffect(() => {
        ReactGA.initialize('G-Q41P747MJ6');
    }, []);

    return null;
};

export default GoogleAnalytics;