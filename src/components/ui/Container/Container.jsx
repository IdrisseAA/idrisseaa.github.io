import React from 'react';
import './Container.css';


// eslint-disable-next-line react/prop-types
const Container = ({ children, className = '' }) => {
    return (
        <div className={`container ${className}`}>
            {children}
        </div>
    );
};

export default Container;