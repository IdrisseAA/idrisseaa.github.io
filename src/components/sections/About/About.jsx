import React from 'react';
import './About.css';
import profileImage from '../../../assets/images/profile/profilePic.jpg';
import Divider from "../../ui/Divider.jsx";

const About = () => {
    return (
        <section className="about" id="about">
            <Divider/>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img
                        className="about-image"
                        src={profileImage}
                        alt="Abdallah Idrisse, ML Engineer"
                    />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I'm Idrisse, a Machine Learning Engineer building my expertise in
                            AI and data-driven solutions. Currently working at Thales, I focus
                            on machine learning, NLP, and automation to solve real-world problems.
                        </p>
                        <p>
                            My toolkit includes Python, TensorFlow, Hugging Face, and
                            Streamlit. I'm passionate about learning and growing in this
                            field—from building sentiment analysis pipelines to exploring the
                            latest AI advancements. Always eager to take on new challenges and
                            expand my skills.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>Python</p>
                            <hr className="skill-bar skill-bar--50"/>
                        </div>
                        <div className="about-skill">
                            <p>TensorFlow</p>
                            <hr className="skill-bar skill-bar--70"/>
                        </div>
                        <div className="about-skill">
                            <p>PyTorch</p>
                            <hr className="skill-bar skill-bar--60"/>
                        </div>
                        <div className="about-skill">
                            <p>SQL</p>
                            <hr className="skill-bar skill-bar--50"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1.5+</h1>
                    <p>Years Experience</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>9+</h1>
                    <p>ML Projects</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>6+</h1>
                    <p>Research Papers</p>
                </div>
            </div>
        </section>
    );
};

export default About;