import React, { useState } from 'react';
import projectsData from '../../../assets/data/projects.js';
import arrowIcon from '../../../assets/images/icons/arrow_icon.png';
import Card from '../../ui/Card/Card.jsx';
import Button from '../../ui/Button/Button.jsx';
import './Projects.css';
import Divider from "../../ui/Divider.jsx";

const Projects = () => {
    // IMPROVEMENT: Add state for visible projects count
    const INITIAL_VISIBLE = 6; // Show 6 projects initially
    const LOAD_MORE_COUNT = 3; // Load 3 more each time
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
    const [isLoading, setIsLoading] = useState(false);

    // IMPROVEMENT: Handle show more with loading state
    const handleShowMore = () => {
        setIsLoading(true);
        // Simulate loading delay for smooth UX
        setTimeout(() => {
            setVisibleCount(prev => Math.min(prev + LOAD_MORE_COUNT, projectsData.length));
            setIsLoading(false);
        }, 300);
    };

    // Get visible projects
    const visibleProjects = projectsData.slice(0, visibleCount);
    const hasMore = visibleCount < projectsData.length;

    // IMPROVEMENT: Empty state
    if (!projectsData || projectsData.length === 0) {
        return (
            <section className="myprojects" id="projects">
                <Divider/>
                <div className="projects-title">
                    <h1>My Projects</h1>
                </div>
                <div className="projects-empty" role="status">
                    <p>No projects available at the moment. Check back soon!</p>
                </div>
            </section>
        );
    }

    return (
        <section className="myprojects" id="projects">
            <Divider/>
            <div className="projects-title">
                <h1>My Projects</h1>
            </div>
            {/* IMPROVEMENT: Added aria-label for screen readers */}
            <div className="projects-container" role="list" aria-label="Project cards">
                {visibleProjects.map((project, index) => (
                    <Card
                        key={index}
                        variant="project"
                        image={project.image}
                        title={project.title || project.name}
                        description={project.description}
                        technologies={project.technologies}
                        ctaText="View on GitHub"
                        onCtaClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                        // IMPROVEMENT: Stagger animation delay for each card
                        style={{ animationDelay: `${index * 0.1}s` }}
                        role="listitem"
                    />
                ))}
            </div>
            {/* IMPROVEMENT: Centered button container, only show if has more projects */}
            {hasMore && (
                <div className="projects-show-more">
                    <Button
                        variant="primary"
                        size="medium"
                        iconRight={!isLoading && <img src={arrowIcon} alt="" aria-hidden="true"/>}
                        onClick={handleShowMore}
                        disabled={isLoading}
                        aria-label={`Load ${Math.min(LOAD_MORE_COUNT, projectsData.length - visibleCount)} more projects`}
                    >
                        {isLoading ? 'Loading...' : 'Show More'}
                    </Button>
                </div>
            )}
        </section>
    );
};

export default Projects;