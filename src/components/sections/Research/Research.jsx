import React from 'react';
import './Research.css';
import researchData from '../../../assets/data/researches.js';
import arrowIcon from '../../../assets/images/icons/arrow_icon.png';
import Card from '../../ui/Card/Card.jsx';

const Research = () => {
    return (
        <section className="research" id="research">
            <div className="research-title">
                <h1>Research</h1>
            </div>
            <div className="research-container">
                {researchData.map((research, index) => (
                    <Card
                        key={index}
                        variant="research"
                        meta={research.researchNumber}
                        title={research.name}
                        description={research.description}
                        ctaText="Read More"
                        ctaIcon={arrowIcon}
                        onCtaClick={() => console.log(`Read more about ${research.name}`)} // Replace with actual link/action
                    />
                ))}
            </div>
        </section>
    );
};

export default Research;