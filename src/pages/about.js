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
                            I’m a software engineer with a diverse background in education and technology, currently pursuing a Master of Science in Computer Science at Northeastern University.
                        </p>
                        <p className="justified-text">
                            I have hands-on experience with Java, Python, SQL, JavaScript, TypeScript, C, and R. I’ve worked with both SQL and NoSQL databases, including PostgreSQL, MySQL, and MongoDB, and have built full-stack web and mobile applications. I'm an AWS Certified Cloud Practitioner with experience deploying microservices, working with containerized environments, and implementing CI/CD pipelines. I’m also proficient in object-oriented design, Agile methodologies, and version control with Git.
                        </p>
                        <p className="justified-text">
                            Previously, I was a tenured public school teacher in New York, where I founded and expanded a Mandarin program for grades 6–12. That experience sharpened my leadership, organization, and communication skills—strengths I now bring to engineering teams.
                        </p>
                        <p className="justified-text">
                            I’m passionate about solving real-world problems through clean, thoughtful code and excited to contribute to innovative projects across industries—from cloud infrastructure to AI-powered tools.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    </Layout>
);

export default About;
