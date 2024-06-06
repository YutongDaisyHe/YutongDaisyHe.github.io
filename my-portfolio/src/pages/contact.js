import React from 'react';
import Layout from '../components/Layout';
import '../styles/contact.css';

const ContactPage = () => {
    return (
        <Layout>
            <div className="contact-container">
                <h2>Contact Me</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="firstName">Name <span className="required">(required)</span></label>
                        <div className="name-fields">
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
                            <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address <span className="required">(required)</span></label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject <span className="required">(required)</span></label>
                        <input type="text" id="subject" name="subject" placeholder="Let's work together!" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message <span className="required">(required)</span></label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">SUBMIT</button>
                </form>
            </div>
        </Layout>
    );
};

export default ContactPage;
