import React, { useState } from 'react';
import './Research.css';
import researchData from '../../../assets/data/researches.js';
import arrowIcon from '../../../assets/images/icons/arrow_icon.png';
import Card from '../../ui/Card/Card.jsx';
import Divider from "../../ui/Divider.jsx";
import Button from '../../ui/Button/Button.jsx';

const INITIAL_VISIBLE = 6;
const LOAD_MORE_COUNT = 3;

const Research = () => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
    const [isLoading, setIsLoading] = useState(false);

    const handleShowMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleCount(prev => prev + LOAD_MORE_COUNT);
            setIsLoading(false);
        }, 300);
    };

    const visibleResearch = researchData.slice(0, visibleCount);
    const hasMore = visibleCount < researchData.length;

    if (researchData.length === 0) {
        return (
            <section className="research" id="research">
                <Divider/>
                <div className="research-title">
                    <h1>Research</h1>
                </div>
                <div className="research-empty">
                    <p>No research available at the moment.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="research" id="research">
            <Divider/>
            <div className="research-title">
                <h1>Research</h1>
            </div>
            <div className="research-container" role="list" aria-label="Research publications">
                {visibleResearch.map((research, index) => (
                    <Card
                        key={index}
                        variant="research"
                        meta={research.researchNumber}
                        title={research.name}
                        description={research.description}
                        ctaText="Read More"
                        ctaIcon={arrowIcon}
                        onCtaClick={() => console.log(`Read more about ${research.name}`)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        role="listitem"
                    />
                ))}
            </div>
            {hasMore && (
                <div className="research-show-more">
                    <Button
                        variant="primary"
                        size="medium"
                        iconRight={!isLoading && <img src={arrowIcon} alt="" aria-hidden="true"/>}
                        onClick={handleShowMore}
                        disabled={isLoading}
                        aria-label={`Load ${Math.min(LOAD_MORE_COUNT, researchData.length - visibleCount)} more research items`}
                    >
                        {isLoading ? 'Loading...' : 'Show More'}
                    </Button>
                </div>
            )}
        </section>
    );
};

export default Research;