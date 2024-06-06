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

const IndexPage = () => (
    <Layout>
        <div className="layout">
            <main>
                <section className="about">
                    <div className="portrait">
                        <img src="/portrait.jpeg" alt="My Portrait" className="portrait-img"/>
                    </div>
                    <div className="about-me">
                        <h2>About Me</h2>
                        <p className="justified-text">
                            I am pursuing a Master of Science in Computer Science at Northeastern
                            University, specializing in software development and problem-solving.
                        </p>
                        <p className="justified-text">
                            I have practical experience with Java, Python, C, JavaScript, TypeScript,
                            and R. My expertise includes working with databases such as MySQL, MongoDB,
                            and Firebase, and developing full-stack applications using React.js and
                            Node.js. I am proficient in object-oriented design, Agile methodologies, and version control with Git.
                        </p>
                        <p className="justified-text">
                            Previously, as a public school teacher in New York, I developed strong communication, leadership, and organizational skills. My ability to learn new techniques, adapt to challenges, and empathize with others has been instrumental in my achievements in both teaching and my ongoing journey in computer science.
                        </p>
                        <p className="justified-text">
                            I am eager to leverage my teaching experience and technical skills in software engineering roles, contributing effectively to innovative projects and dynamic teams.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    </Layout>
);

export default IndexPage;
