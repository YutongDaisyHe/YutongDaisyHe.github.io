import React from 'react';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/contact.css';

const Contact = () => (
    <Layout>
        <div className="layout">
            <div className="contact-container">
                <h2 className="fw-bolder align-content-center p-2">Contact Me</h2>
                <div className="contact-info">
                    <div className="contact-item">
                        <h3>City</h3>
                        <p>Boston, MA</p>
                    </div>
                    <div className="contact-item">
                        <h3>Email</h3>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope}/>{' '}
                            <a href="mailto:hytdaisy@gmail.com">hytdaisy@gmail.com</a>
                        </p>
                    </div>
                    <div className="contact-item">
                        <h3>LinkedIn</h3>
                        <p>
                            <FontAwesomeIcon icon={faLinkedin}/>{' '}
                            <a href="https://www.linkedin.com/in/yutonghe" target="_blank"
                               rel="noopener noreferrer">
                                linkedin.com/in/yutonghe
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default Contact;
