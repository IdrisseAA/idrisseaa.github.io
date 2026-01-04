/* eslint-disable react/prop-types */
import React from 'react';
import './Divider.css';

// Customizable divider with width, spacing, and glow intensity options
const Divider = ({ 
    width = 'responsive',  // 'responsive' | 'narrow' | 'wide' | 'full'
    spacing = 'default',   // 'none' | 'small' | 'default' | 'large'
    glowIntensity = 'medium' // 'none' | 'low' | 'medium' | 'high'
}) => {
    // Build dynamic class names based on props
    const dividerClasses = [
        'glow-divider',
        `divider-width--${width}`,
        `divider-glow--${glowIntensity}`
    ].join(' ');

    const wrapperClasses = [
        'divider-wrapper',
        `divider-spacing--${spacing}`
    ].join(' ');

    return (
        <div className={wrapperClasses} role="separator" aria-hidden="true">
            <div className={dividerClasses}></div>
        </div>
    );
};

export default Divider;