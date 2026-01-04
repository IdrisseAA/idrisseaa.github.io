/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Hero.css';
import profileImage from '../../../assets/images/profile/profilePic.jpg';
import resumePDF from '../../../assets/documents/Ahamadi_Abdallah_IDRISSE_English_Resume.pdf';
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
                I'm Idrisse, an ML Engineer building my expertise at Thales, passionate about using machine learning
                to solve real-world problems.
            </p>
            <div className="hero-action">
                <AnchorLink href="#contact" offset={50}>
                    <Button variant="primary" size="large">
                        Connect with me
                    </Button>
                </AnchorLink>
                <a href={resumePDF} download="Abdallah_Idrisse_Resume.pdf">
                    <Button variant="secondary" size="large">
                        My resume
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default Hero;