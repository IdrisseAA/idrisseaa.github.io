import React from 'react';
import './Footer.css';
import linkedinIcon from '../../../assets/images/icons/linkedin_icon.png';
import githubIcon from '../../../assets/images/icons/github_icon.png';
import twitterIcon from '../../../assets/images/icons/twitter_icon.png';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p className="footer-bottom-text">© {new Date().getFullYear()} IdrisseAA</p>
                    <div className="footer-socials-wrapper">
                        <div className="footer-socials">
                            <a
                                href="https://linkedin.com/in/idrisseaa"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my LinkedIn profile"
                            >
                                <img src={linkedinIcon} alt="LinkedIn profile link"/>
                            </a>
                            <a
                                href="https://github.com/idrisseaa"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my GitHub profile"
                            >
                                <img src={githubIcon} alt="GitHub profile link"/>
                            </a>
                            <a
                                href="https://twitter.com/idrisseaa"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit my Twitter profile"
                            >
                                <img src={twitterIcon} alt="Twitter profile link"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;