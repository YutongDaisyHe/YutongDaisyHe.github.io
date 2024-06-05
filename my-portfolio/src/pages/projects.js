import React from 'react';
import '../styles/projects.css';
import Layout from "../components/Layout";
import goalForItImage from '../../static/goalforit.png';
import recipeFridgeImage from '../../static/recipefridge.png';
import socialMediaAppImage from '../../static/socialmediaapp.png';


const ProjectsPage = () => (
    <Layout>
    <div className="container">
        <h1>Projects</h1>
        <div className="project col-4">
            <div className="col-2 col-sm-1">
                <a href="https://www.figma.com/proto/Sox6tCyPBSJjXxhzPmr74n/GoalForIt-Screens?node-id=0-1&t=3mUINjYc9IwIWii7-1">
                    <img src={goalForItImage} alt="GoalForIt App Screenshot" className="project-image" />
                </a>
            </div>
            <div className="project-content col-2 col-sm-1">
                <div className="project-header">
                    <span>GoalForIt! Goals Tracking and Habits Building Mobile App</span>
                </div>
                <div>
                    <span>Course Project, Northeastern University January 2023 – April 2023</span>
                </div>
                <div className="project-details">
                    <div>
                        <h4>Front-end Development:</h4>
                        <ul>
                            <li>Designed and implemented intuitive user interfaces for various screens.</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Back-end Development:</h4>
                        <ul>
                            <li>Utilized Firebase real-time database to establish seamless data connectivity among users and messages.</li>
                            <li>Implemented essential app features such as profile editing, friend management, and notification messaging.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="project col-4">
            <div className="col-2 col-sm-1">
                <a href="https://www.figma.com/design/fyKyA9QHn4sHC9sBNLozu2/Saved_Recipe_Page?m=dev&node-id=0-1&t=9dOlr2tyrykdfRjN-1">
                    <img src={recipeFridgeImage} alt="RecipeFridge App Screenshot"
                         className="project-image"/>
                </a>
            </div>
            <div className="project-content col-2 col-sm-1">
                <div className="project-header">
                    <span>RecipeFridge Recipe Creating and Searching Web App</span>
                </div>
                <div>
                <span>Course Project, Northeastern University October 2022 – December 2022</span>
                </div>
                <div className="project-details">
                    <div>
                        <h4>Front-end Development:</h4>
                        <ul>
                            <li>Designed and implemented UI for multiple key pages, focusing on intuitive navigation and user-friendly interfaces.</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Back-end Development:</h4>
                        <ul>
                            <li>Established robust data connectivity with MongoDB to enable seamless data exchange among users and recipes.</li>
                            <li>Executed comprehensive implementation of user management, recipe creation, and friend interaction functionalities.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="project col-4">
            <div className="col-2 col-sm-1">
                <a href="https://www.figma.com/design/9wN6DXE1LK0BDdJolSzKrn/FSEG6-Tuiter_Wireframe?m=dev&node-id=0-1&t=W37DtVJi6WrBqVAK-1">
                    <img src={socialMediaAppImage} alt="Social Media App Screenshot" className="project-image" />
                </a>
            </div>
            <div className="project-content col-2 col-sm-1">
                <div className="project-header">
                    <span>Integrating a Customer-Restaurant Interaction Module to A Social Media Web App</span>
                </div>
                <div>
                    <span>Course Project, Northeastern University October 2022 – December 2022</span>
                </div>
                <div className="project-details">
                    <ul>
                        <li>Led a team in adhering to Scrum Agile methodologies to integrate a customer-restaurant feature into a social media platform.</li>
                        <li>Crafted and deployed user authentication systems for different user types.</li>
                        <li>Implemented and rigorously tested RESTful Web Services for data management.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="project col-4">
            <div className="project-content col-2 col-sm-1">
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
            </div>
        </div>
    </div>
    </Layout>
);

export default ProjectsPage;
