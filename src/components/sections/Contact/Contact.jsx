import React from 'react';
import './Contact.css';
import Button from '../../ui/Button/Button.jsx';
import Divider from "../../ui/Divider.jsx";


const Contact = () => {
    // simplified contact: only the form remains here

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log({
            name: formData.get('name'),
            subject: formData.get('subject'),
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
                <div className="contact-right contact-form-container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required/>

                        <label htmlFor="subject">Topic</label>
                        <input type="text" id="subject" name="subject" placeholder="Topic of your message" />

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