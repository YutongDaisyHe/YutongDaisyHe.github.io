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
                        <h2 className="about-header">Hi, I'm Yutong.</h2>
                        <p className="justified-text">
                            I am currently pursuing a Master of Science in Computer Science at
                            Northeastern
                            University.
                        </p>
                        <p className="justified-text">
                            I have practical experience with Java, Python, C, JavaScript,
                            TypeScript,
                            and R. My expertise includes working with databases such as MySQL,
                            MongoDB,
                            and Firebase, and developing full-stack applications using React.js and
                            Node.js. I am proficient in object-oriented design, Agile methodologies,
                            and version control with Git.
                        </p>
                        <p className="justified-text">
                            As a former public school teacher in New York, I developed
                            strong communication, leadership, and organizational skills.
                            My ability to learn new techniques, adapt to challenges, and empathize
                            with others has been instrumental in my achievements in both teaching
                            and my ongoing journey in computer science.
                        </p>
                        <p className="justified-text">
                            I am eager to leverage my teaching experience and technical skills in
                            software engineering roles, contributing effectively to innovative
                            projects and dynamic teams.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    </Layout>
);

export default About;
