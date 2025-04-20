import {React} from "react";
import './About.css';
import profileImage from '../../../assets/images/profile/profilePic.jpg';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="glow-divider"></div>
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
                            I’m Idrisse, a Machine Learning Engineer with experience at Thales,
                            where I honed my skills in building data-driven solutions.
                            Specializing in machine learning, NLP, and automation, I’m
                            passionate about leveraging technology to tackle complex
                            challenges.
                        </p>
                        <p>
                            My toolkit includes Python, TensorFlow, Hugging Face, and
                            Streamlit, and I thrive on creating scalable, impactful
                            projects—like my real-time sentiment analysis pipeline. When I’m
                            not coding, I’m exploring the latest advancements in AI to stay at
                            the forefront of innovation.
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
                    <h1>10+</h1>
                    <p>Years of Experience</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </section>
    );
};

export default About;