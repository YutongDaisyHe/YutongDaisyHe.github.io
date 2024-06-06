
import React from 'react';
import Layout from "../components/Layout";
import '../styles/projects.css';
import goalForItImage from '../../static/goalforit.png';
import recipeFridgeImage from '../../static/recipefridge.png';
import socialMediaAppImage from '../../static/socialmediaapp.png';
import nlpProjectImage from '../../static/nlp_project.png';

const ProjectsPage = () => (
    <Layout>
        <div className="container">
            <h2 className="fw-bolder align-content-center">Projects</h2>

            {/* Project 1 */}
            <div className="project">
                <div className="project-image-container">
                    <a href="https://www.figma.com/proto/Sox6tCyPBSJjXxhzPmr74n/GoalForIt-Screens?node-id=0-1&t=3mUINjYc9IwIWii7-1">
                        <img src={goalForItImage} alt="GoalForIt App Screenshot" className="project-image" />
                    </a>
                </div>
                <div className="project-content">
                    <div className="project-header">
                        <span>GoalForIt! Goals Tracking and Habits Building Mobile App</span>
                    </div>
                    <div>
                        <span>Course Project, Northeastern University January 2023 – April 2023</span>
                    </div>
                    <div className="project-details">
                        <div>
                            <span>Front-end Development:</span>
                            <ul>
                                <li>Designed and implemented intuitive user interfaces for various screens.</li>
                            </ul>
                        </div>
                        <div>
                            <span>Back-end Development:</span>
                            <ul>
                                <li>Utilized Firebase real-time database to establish seamless data connectivity among users and messages.</li>
                                <li>Implemented essential app features such as profile editing, friend management, and notification messaging.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project-skills">
                        <div className="skill">Java</div>
                        <div className="skill">Android Studio</div>
                        <div className="skill">Firebase</div>
                    </div>
                </div>
            </div>

            {/* Project 2 */}
            <div className="project">
                <div className="project-image-container">
                    <a href="https://www.figma.com/design/fyKyA9QHn4sHC9sBNLozu2/Saved_Recipe_Page?m=dev&node-id=0-1&t=9dOlr2tyrykdfRjN-1">
                        <img src={recipeFridgeImage} alt="RecipeFridge App Screenshot" className="project-image" />
                    </a>
                </div>
                <div className="project-content">
                    <div className="project-header">
                        <span>RecipeFridge Recipe Creating and Searching Web App</span>
                    </div>
                    <div>
                        <span>Course Project, Northeastern University October 2022 – December 2022</span>
                    </div>
                    <div className="project-details">
                        <div>
                            <span>Front-end Development:</span>
                            <ul>
                                <li>Designed and implemented UI for multiple key pages, focusing on intuitive navigation and user-friendly interfaces.</li>
                            </ul>
                        </div>
                        <div>
                            <span>Back-end Development:</span>
                            <ul>
                                <li>Established robust data connectivity with MongoDB to enable seamless data exchange among users and recipes.</li>
                                <li>Executed comprehensive implementation of user management, recipe creation, and friend interaction functionalities.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project-skills">
                        <div className="skill">Java</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">React</div>
                        <div className="skill">Node.js</div>
                        <div className="skill">MongoDB</div>
                    </div>
                </div>
            </div>

            {/* Project 3 */}
            <div className="project">
                <div className="project-image-container">
                    <a href="https://www.figma.com/design/9wN6DXE1LK0BDdJolSzKrn/FSEG6-Tuiter_Wireframe?m=dev&node-id=0-1&t=W37DtVJi6WrBqVAK-1">
                        <img src={socialMediaAppImage} alt="Social Media App Screenshot" className="project-image" />
                    </a>
                </div>
                <div className="project-content">
                    <div className="project-header">
                        <span>Integrating a Customer-Restaurant Interaction Module to A Social Media Web App</span>
                    </div>
                    <div>
                        <span>Course Project, Northeastern University October 2022 – December 2022</span>
                    </div>
                    <div className="project-details">
                        <span>Team Leadership & Agile Management:</span>
                        <ul>
                            <li>Led a team in adhering to Scrum Agile methodologies to integrate a customer-restaurant feature into a social media platform.</li>
                        </ul>
                        <span>Back-end Development:</span>
                        <ul>
                            <li>Crafted and deployed user authentication systems for different user types.</li>
                            <li>Implemented and rigorously tested RESTful Web Services for data management.</li>
                        </ul>
                    </div>
                    <div className="project-skills">
                        <div className="skill">Jira</div>
                        <div className="skill">Agile Scrum</div>
                        <div className="skill">Node.js</div>
                        <div className="skill">TypeScript</div>
                    </div>
                </div>
            </div>

            {/* Project 4 */}
            <div className="project">
                <div className="project-image-container">
                    <img src={nlpProjectImage} alt="NLP Project Screenshot" className="project-image" />
                </div>
                <div className="project-content">
                    <div className="project-header">
                        <span>Using NLP/Machine Learning for Bibliography Parsing</span>
                    </div>
                    <div>
                        <span>XN Rising Project, Northeastern University & Pfizer January 2022 – April 2022</span>
                    </div>
                    <div className="project-details">
                        <ul>
                            <li>Collaborated on developing a bibliography parsing tool using ensemble learning, which combines regular expression parsing with machine learning algorithms to significantly enhance accuracy.</li>
                        </ul>
                    </div>
                    <div className="project-skills">
                        <div className="skill">Python</div>
                        <div className="skill">Regular Expression</div>
                        <div className="skill">Machine Learning</div>
                    </div>
                </div>
            </div>

        </div>
    </Layout>
);

export default ProjectsPage;
