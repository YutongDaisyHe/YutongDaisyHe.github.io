import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import '../components/layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const About = () => (
    <Layout>
        <div className="layout">
            <main>
                <section className="row col-12 about">
                    <div className="col-12 col-md-6 portrait">
                        <img src="/portrait.jpeg" alt="My Portrait" className="portrait-img"/>
                    </div>
                    <div className="col-12 col-md-6 about-me">
                        <h2 className="about-header">Hi, I'm Yutong (Daisy).</h2>
                        <p className="justified-text">
                            I’m a software engineer with a Master of Science in Computer Science from Northeastern University and a passion for building reliable, user-centered applications. Currently, I’m a Web Developer Intern at the Museum of Science, where I develop and maintain web features using Drupal, PHP, and JavaScript to enhance educational content delivery.
                        </p>
                        <p className="justified-text">
                            Previously, I interned at IpserLab, a startup where I was promoted to Intern Development Team Lead. I contributed to both front-end and back-end systems using React, Java, and PostgreSQL. Earlier in my career, I was a tenured public school teacher, where I founded and led a Mandarin program for grades 6–12 — an experience that strengthened my leadership, communication, and adaptability.
                        </p>
                        <p className="justified-text">
                            My technical background spans full-stack development, cloud platforms, and Agile workflows. I enjoy creating practical, scalable solutions that make a meaningful impact.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    </Layout>
);

export default About;
