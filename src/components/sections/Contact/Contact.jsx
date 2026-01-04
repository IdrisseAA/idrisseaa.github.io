import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Button from '../../ui/Button/Button.jsx';
import Divider from "../../ui/Divider.jsx";
import { EMAILJS_CONFIG } from '../../../utils/constants.js';
import { sanitizeString, normalizeEmail, isValidEmail } from '../../../utils/helpers.js';


const Contact = () => {
    // Initialize EmailJS once on component mount
    React.useEffect(() => {
        emailjs.init(EMAILJS_CONFIG.publicKey);
    }, []);

    // Form state: errors for validation feedback and success flag for submission confirmation
    const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });
    // IMPROVEMENT #4: Add success state to show confirmation message after form submission
    const [success, setSuccess] = useState(false);
    // EMAILJS: Add loading state while sending email
    const [isSending, setIsSending] = useState(false);
    // IMPROVEMENT #6: Add character count state for message field
    const [messageLength, setMessageLength] = useState(0);

    // Form-specific validation for name field
    const validateName = (name) => {
        // allow letters (including accents), spaces, hyphens and apostrophes; minimum 2 chars
        const re = /^[A-Za-zÀ-ÖØ-öø-ÿ'\- ]{2,60}$/u;
        return re.test(name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const rawName = formData.get('name');
        const rawSubject = formData.get('subject');
        const rawEmail = formData.get('email');
        const rawMessage = formData.get('message');

        const name = sanitizeString(rawName);
        const subject = sanitizeString(rawSubject);
        const email = normalizeEmail(rawEmail);
        const message = sanitizeString(rawMessage);

        // clear previous errors
        setErrors({ name: '', email: '', subject: '', message: '' });

        if (!validateName(name)) {
            setErrors((prev) => ({ ...prev, name: 'Please enter a valid name (letters, spaces, hyphens, apostrophes only).' }));
            if (form.name) form.name.focus();
            return;
        }

        if (subject && subject.length > 120) {
            setErrors((prev) => ({ ...prev, subject: 'Topic is too long. Please shorten it.' }));
            return;
        }

        if (!isValidEmail(email) || email.length > 254) {
            setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
            if (form.email) form.email.focus();
            return;
        }

        if (message.length > 1000) {
            setErrors((prev) => ({ ...prev, message: 'Message is too long. Please shorten it.' }));
            return;
        }

        // EMAILJS: All validation passed, now send email
        setIsSending(true);
        
        const templateParams = {
            to_email: 'contact@idrisseaa.com', // Your receiving email
            name: name,
            email: email,
            subject: subject || 'No subject',
            message: message,
            time: new Date().toLocaleString()
        };

        emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams
        )
        .then(() => {
            setIsSending(false);
            setSuccess(true);
            form.reset();
            setMessageLength(0);
            
            // Hide success message after 5 seconds
            setTimeout(() => setSuccess(false), 5000);
        })
        .catch((error) => {
            setIsSending(false);
            console.error('EmailJS error:', error);
            setErrors((prev) => ({
                ...prev,
                message: 'Failed to send message. Please try again.'
            }));
        });
    };

    return (
        <section className="contact" id="contact">
            <Divider/>
            <div className="contact-header">
                <h1 className="contact-header-title">Contact</h1>
                <p className="contact-subtitle">
                    Let’s build something great together. Reach out for collaboration, feedback, or just to say hi.
                </p>
            </div>
            <div className="contact-section">
                <div className="contact-right contact-form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-field">
                            {/* IMPROVEMENT #3: Add required indicator (*) to label */}
                            <label htmlFor="name">Your Name <span className="required-indicator">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                required
                                maxLength={60}
                                pattern="^[A-Za-zÀ-ÖØ-öø-ÿ' \-]+$"
                                aria-invalid={!!errors.name}
                                onChange={() => setErrors((p) => ({ ...p, name: '' }))}
                                onInvalid={(e) => e.target.setCustomValidity('Please enter your name.')}
                                onInput={(e) => e.target.setCustomValidity('')}
                            />
                            {errors.name && <div className="form-error" role="alert">{errors.name}</div>}
                        </div>

                        <div className="form-field">
                            <label htmlFor="subject">Topic</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Topic of your message"
                                maxLength={120}
                                aria-invalid={!!errors.subject}
                                onChange={() => setErrors((p) => ({ ...p, subject: '' }))}
                            />
                            {errors.subject && <div className="form-error" role="alert">{errors.subject}</div>}
                        </div>

                        <div className="form-field form-field--email">
                            {/* IMPROVEMENT #3: Add required indicator (*) to label */}
                            <label htmlFor="email">Your Email <span className="required-indicator">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                maxLength={254}
                                aria-invalid={!!errors.email}
                                onChange={() => setErrors((p) => ({ ...p, email: '' }))}
                                onInvalid={(e) => e.target.setCustomValidity('Please enter a valid email address.')}
                                onInput={(e) => e.target.setCustomValidity('')}
                            />
                            {errors.email && <div className="form-error" role="alert">{errors.email}</div>}
                        </div>

                        <div className="form-field form-field--message">
                            {/* IMPROVEMENT #3: Add required indicator (*) to label */}
                            {/* IMPROVEMENT #6: Add character counter for message field */}
                            <div className="label-with-counter">
                                <label htmlFor="message">Your Message <span className="required-indicator">*</span></label>
                                <span className="character-counter">{messageLength}/1000</span>
                            </div>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                required
                                maxLength={1000}
                                aria-invalid={!!errors.message}
                                onChange={(e) => {
                                    setErrors((p) => ({ ...p, message: '' }));
                                    setMessageLength(e.target.value.length);
                                }}
                                onInvalid={(e) => e.target.setCustomValidity('Please enter your message.')}
                                onInput={(e) => e.target.setCustomValidity('')}
                            ></textarea>
                            {errors.message && <div className="form-error" role="alert">{errors.message}</div>}
                        </div>

                        <div className="form-field form-field--submit">
                            <Button variant="primary" size="medium" type="submit" disabled={isSending}>
                                {isSending ? 'Sending...' : 'Send Message'}
                            </Button>
                        </div>
                    </form>
                    {/* IMPROVEMENT #4: Show success message after form submission */}
                    {success && (
                        <div className="form-success" role="status" aria-live="polite">
                            ✓ Message sent successfully! I will get back to you soon.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
