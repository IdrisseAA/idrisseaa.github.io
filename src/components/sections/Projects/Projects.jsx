import React from 'react';
import projectsData from '../../../assets/data/projects.js';
import arrowIcon from '../../../assets/images/icons/arrow_icon.png';
import Card from '../../ui/Card/Card.jsx';
import Button from '../../ui/Button/Button.jsx';
import './Projects.css';

const Projects = () => {
    return (
        <section className="myprojects" id="projects">
            <div className="glow-divider"></div>
            <div className="projects-title">
                <h1>My Projects</h1>
            </div>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <Card
                        key={index}
                        variant="project"
                        image={project.image}
                        title={project.title || project.name}
                        description={project.description}
                        technologies={project.technologies}
                        ctaText="View on GitHub"
                        onCtaClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                    />
                ))}
            </div>
            <Button
                variant="primary"
                size="medium"
                iconRight={<img src={arrowIcon} alt="Arrow Icon"/>}
            >
                Show More
            </Button>
            <div className="glow-divider"></div>
        </section>
    );
};

export default Projects;