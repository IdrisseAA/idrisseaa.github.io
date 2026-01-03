import React from 'react';
import './Footer.css';
import linkedinIcon from "../../../assets/images/icons/linkedin_icon.png";
import githubIcon from "../../../assets/images/icons/github_icon.png";
import twitterIcon from "../../../assets/images/icons/twitter_icon.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <div className="footer-content">
                <p className="copyright">
                    © {currentYear} IdrisseAA
                </p>

                <div className="social-icons">
                    <a
                        href="https://linkedin.com/in/idrisseaa"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile"
                    >
                        <img src={linkedinIcon} alt="" />
                    </a>
                    <a
                        href="https://github.com/idrisseaa"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile"
                    >
                        <img src={githubIcon} alt="" />
                    </a>
                    <a
                        href="https://twitter.com/idrisseaa"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my Twitter (X) profile"
                    >
                        <img src={twitterIcon} alt="" />
                    </a>
                </div>

                {/* Optional but recommended for developer portfolios */}
                <p className="built-by">Built with curiosity using React</p>
            </div>
        </footer>
    );
};

export default Footer;