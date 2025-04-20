import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({
                    children,
                    variant = 'primary',
                    size = 'medium',
                    icon,
                    iconRight,
                    className = '',
                    ...props
                }) => {
    return (
        <button
            className={`button button--${variant} button--${size} ${className}`}
            {...props}
        >
            {icon && <span className="button-icon button-icon--left">{icon}</span>}
            <span className="button-text">{children}</span>
            {iconRight && (
                <span className="button-icon button-icon--right">{iconRight}</span>
            )}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'glass']), // Added 'glass'
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    icon: PropTypes.node,
    iconRight: PropTypes.node,
    className: PropTypes.string,
};

export default Button;