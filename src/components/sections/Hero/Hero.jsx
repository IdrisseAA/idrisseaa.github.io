import React from 'react';
import './Hero.css';
import profileImage from '../../../assets/images/profile/profilePic.jpg';
import Button from '../../ui/Button/Button.jsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <img src={profileImage} alt="Abdallah Idrisse, ML Engineer" className="hero-image"/>
            <h1 className="hero-title">
                <span>Abdallah Idrisse,</span> ML Engineer
            </h1>
            <p className="hero-subtitle">
                I’m Idrisse, an ML Engineer with experience at Thales, passionate about leveraging machine learning to
                solve
                complex problems.
            </p>
            <div className="hero-action">
                <AnchorLink href="#contact" offset={50}>
                    <Button variant="primary" size="large">
                        Connect with me
                    </Button>
                </AnchorLink>
                <a href="../../../assets/documents/Ahamadi_Abdallah_IDRISSE_English_Resume.pdf" download>
                    <Button variant="secondary" size="large">
                        My resume
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default Hero;