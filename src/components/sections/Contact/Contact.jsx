import React, {useState} from 'react';
import './Contact.css';
import mailIcon from '../../../assets/images/icons/mail_icon.png';
import locationIcon from '../../../assets/images/icons/location_icon.png';
import eyeIcon from '../../../assets/images/icons/eye_icon.png';
import Button from '../../ui/Button/Button.jsx';
import Divider from "../../ui/Divider.jsx";


const Contact = () => {
    const [email, setEmail] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [emailVisible, setEmailVisible] = useState(false);

    const revealEmail = () => {
        const user = 'contact';
        const domain = 'idrisseaa';
        const tld = 'com';
        return `${user}@${domain}.${tld}`;
    };

    const handleEmailClick = () => {
        if (!email) {
            setEmail(revealEmail());
            setEmailVisible(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        });
        e.target.reset();
    };

    return (
        <section className="contact" id="contact">
            <Divider/>
            <div className="contact-header">
                <h1 className="contact-header-title">Contact</h1>
                <p className="contact-subtitle">
                    Let’s build something great together. Reach out for collaboration, projects, or just to say hi.
                </p>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mailIcon} alt="Email icon for contact"/>
                            {email ? (
                                <a
                                    href={`mailto:${email}`}
                                    className="contact-revealed-text"
                                    aria-label="Email: contact at idrisseaa dot com"
                                    data-nosniff
                                >
                                    {email}
                                </a>
                            ) : (
                                <Button
                                    variant="glass"
                                    size="medium"
                                    onClick={handleEmailClick}
                                    className="contact-reveal-button"
                                    iconRight={<img src={eyeIcon} alt="Reveal icon"/>}
                                    aria-label="Click to reveal email address"
                                >
                                    Reveal Email
                                </Button>
                            )}
                        </div>
                        <div className="contact-detail">
                            <img src={locationIcon} alt="Location icon for contact"/>
                            <p>France, EU — Open to remote work</p>
                        </div>
                        
                    </div>
                </div>
                <div className="contact-right">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required/>

                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required/>

                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Write your message here..."
                            required
                        ></textarea>

                        <Button variant="primary" size="medium" type="submit">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;