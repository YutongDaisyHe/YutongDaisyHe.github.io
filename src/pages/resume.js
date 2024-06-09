// src/pages/resume.js

import React from "react";
import Layout from "../components/layout";
import "../styles/resume.css";

const Resume = () => (
    <Layout>
        <div className="resume-container">
            <h1>Yutong (Daisy) He</h1>
            <p>hytdaisy@gmail.com | (617) 763-8070 | Boston, MA | <a href="https://www.linkedin.com/in/yutonghe/">LinkedIn</a></p>

            <section>
                <h2>Education</h2>
                <div className="education-item">
                    <h3>Northeastern University, Boston, MA</h3>
                    <p><strong>Khoury College of Computer Sciences</strong> | Expected Graduation: May 2025</p>
                    <p>MS in Computer Science Candidate, GPA: 3.85/4.00</p>
                    <p>Related courses: Data Structures, Algorithms, Object-Oriented Design, Computer Systems, Foundations of Software Engineering, Web Development, Mobile Application Development, Database Management Systems</p>
                </div>
                <div className="education-item">
                    <h3>New York University, New York, NY</h3>
                    <p>MA in Teaching Foreign Language (Mandarin) and TESOL, GPA: 4.00/4.00</p>
                </div>
                <div className="education-item">
                    <h3>Beijing Normal University, Beijing, China</h3>
                    <p>BA in Chinese Language & Literature, GPA: 3.69/4.00</p>
                </div>
            </section>

            <section>
                <h2>Technical Skills</h2>
                <p>Programming Languages: Java, Python, JavaScript, C, TypeScript, R</p>
                <p>Relational & Non-Relational Databases: MySQL, MongoDB, Firebase</p>
                <p>Web Technologies & Frameworks: HTML, CSS, Node.js, React</p>
                <p>Tools & Platforms: GitHub, Figma, Jira, Android Studio, Postman</p>
                <p>Other Skills: Object-Oriented Design, Agile Scrum</p>
            </section>

            <section>
                <h2>Projects</h2>
                <div className="project-item">
                    <h3>GoalForIt! Goals Tracking and Habits Building Mobile App</h3>
                    <p><strong>Course Project, Northeastern University</strong> | January 2023 – April 2023</p>
                    <p><strong>Front-end Development:</strong> Designed and implemented intuitive user interfaces for various screens.</p>
                    <p><strong>Back-end Development:</strong> Utilized Firebase real-time database to establish seamless data connectivity among users and messages. Implemented essential app features such as profile editing, friend management, and notification messaging.</p>
                </div>
                <div className="project-item">
                    <h3>RecipeFridge Recipe Creating and Searching Web App</h3>
                    <p><strong>Course Project, Northeastern University</strong> | October 2022 – December 2022</p>
                    <p><strong>Front-end Development:</strong> Designed and implemented UI for multiple key pages, focusing on intuitive navigation and user-friendly interfaces.</p>
                    <p><strong>Back-end Development:</strong> Established robust data connectivity with MongoDB to enable seamless data exchange among users and recipes. Executed comprehensive implementation of user management, recipe creation, and friend interaction functionalities.</p>
                </div>
                <div className="project-item">
                    <h3>Integrating a Customer-Restaurant Interaction Module to A Social Media Web App</h3>
                    <p><strong>Course Project, Northeastern University</strong> | October 2022 – December 2022</p>
                    <p>Led a team in adhering to Scrum Agile methodologies to integrate a customer-restaurant feature into a social media platform. Crafted and deployed user authentication systems for different user types. Implemented and rigorously tested RESTful Web Services for data management.</p>
                </div>
                <div className="project-item">
                    <h3>Using NLP/Machine Learning for Bibliography Parsing</h3>
                    <p><strong>XN Rising Project, Northeastern University & Pfizer</strong> | January 2022 – April 2022</p>
                    <p>Collaborated on developing a bibliography parsing tool using ensemble learning, which combines regular expression parsing with machine learning algorithms to significantly enhance accuracy.</p>
                </div>
            </section>

            <section>
                <h2>Work Experience</h2>
                <div className="work-item">
                    <h3>Pelham Middle School & Pelham Memorial High School, Pelham, NY</h3>
                    <p><strong>Tenured Mandarin Teacher, Grades 6-12</strong> | September 2015 – June 2021</p>
                    <p>Founded and expanded the Mandarin program for grades 6-12 in Pelham Public School District.</p>
                </div>
            </section>
        </div>
    </Layout>
);

export default Resume;
