import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Card = ({
  variant = 'research', // 'research' or 'project'
  image,
  meta,
  title,
  description,
  technologies = [],
  ctaText,
  ctaIcon,
  onCtaClick,
  className = '',
}) => {
  return (
    <article className={`card card--${variant} ${className}`}>
      {image && (
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="card-image"
          loading="lazy"
        />
      )}
      {meta && <h3 className="card-meta">{meta}</h3>}
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      {technologies.length > 0 && (
        <div className="card-tech-stack" role="list">
          {technologies.map((tech, index) => (
            <span key={index} role="listitem">{tech}</span>
          ))}
        </div>
      )}
      {ctaText && (
        <Button
          variant="primary"
          size="small"
          iconRight={ctaIcon && <img src={ctaIcon} alt="CTA Icon" />}
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      )}
    </article>
  );
};

Card.propTypes = {
  variant: PropTypes.oneOf(['research', 'project']),
  image: PropTypes.string,
  meta: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
  ctaText: PropTypes.string,
  ctaIcon: PropTypes.string,
  onCtaClick: PropTypes.func,
  className: PropTypes.string,
};

export default Card;