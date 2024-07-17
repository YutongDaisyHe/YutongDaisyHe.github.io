import React from 'react';
import Layout from "../components/Layout";
import '../styles/projects.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import nlpProjectImage from '../../static/nlp_project.png';

// Import all images from the directory
import gpt1 from '../../static/gptRecipe/gpt_2.png';
import gpt2 from '../../static/gptRecipe/gpt_2.png';
import gpt3 from '../../static/gptRecipe/gpt_3.png';
import gpt4 from '../../static/gptRecipe/gpt_4.png';
import gpt5 from '../../static/gptRecipe/gpt_5.png';
import gpt6 from '../../static/gptRecipe/gpt_6.png';
import gpt7 from '../../static/gptRecipe/gpt_7.png';

import rf1 from '../../static/recipeFridge/rf_1.png';
import rf2 from '../../static/recipeFridge/rf_2.png';
import rf3 from '../../static/recipeFridge/rf_3.png';
import rf4 from '../../static/recipeFridge/rf_4.png';
import rf5 from '../../static/recipeFridge/rf_5.png';
import rf6 from '../../static/recipeFridge/rf_6.png';
import rf7 from '../../static/recipeFridge/rf_7.png';
import rf8 from '../../static/recipeFridge/rf_8.png';
import rf9 from '../../static/recipeFridge/rf_9.png';
import rf10 from '../../static/recipeFridge/rf_10.png';
import rf11 from '../../static/recipeFridge/rf_11.png';
import rf12 from '../../static/recipeFridge/rf_12.png';

import gf1 from '../../static/goalForIt/gf_1.png';
import gf2 from '../../static/goalForIt/gf_2.png';
import gf3 from '../../static/goalForIt/gf_3.png';
import gf4 from '../../static/goalForIt/gf_4.png';
import gf5 from '../../static/goalForIt/gf_5.png';
import gf6 from '../../static/goalForIt/gf_6.png';
import gf7 from '../../static/goalForIt/gf_7.png';
import gf8 from '../../static/goalForIt/gf_8.png';

import tr1 from '../../static/tuiterRestaurant/tr_1.png';
import tr2 from '../../static/tuiterRestaurant/tr_2.png';
import tr3 from '../../static/tuiterRestaurant/tr_3.png';
import tr4 from '../../static/tuiterRestaurant/tr_4.png';
import tr5 from '../../static/tuiterRestaurant/tr_5.png';
import tr6 from '../../static/tuiterRestaurant/tr_6.png';
import tr7 from '../../static/tuiterRestaurant/tr_7.png';
import tr8 from '../../static/tuiterRestaurant/tr_8.png';
import tr9 from '../../static/tuiterRestaurant/tr_9.png';
import tr10 from '../../static/tuiterRestaurant/tr_10.png';
import tr11 from '../../static/tuiterRestaurant/tr_11.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

// const gptimages = [gpt1, gpt2, gpt3, gpt4, gpt5, gpt6, gpt7];
const gptimages = [gpt2];

const rfimages = [rf1, rf2, rf3, rf4, rf5, rf6, rf7, rf8, rf9, rf10, rf11, rf12];
const gfimages = [gf1, gf2, gf3, gf4, gf5, gf6, gf7, gf8];
const trimages = [tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8, tr9, tr10, tr11];

const ProjectsPage = () => (
    <Layout>
        <div className="container">
            <h2 className="fw-bolder align-content-center p-2">Projects</h2>

            {/* Project 1 */}
            <div className="row col-12 project">
                <div className="col-12 col-md-6 project-image-container">
                    <Carousel showThumbs={false} className="carousel-slider">
                        {gptimages.map((src, index) => (
                            <div key={index} className="slide">
                                <img src={src} alt={`GPT-Recipe Screenshot ${index + 1}`} className="project-image" />
                            </div>
                        ))}
                    </Carousel>

                </div>
                <div className="col-12 col-md-6 project-content">
                    <div className="project-header">
                        <span>GPT-Recipe Multi-Agent Application</span>
                    </div>
                    <div>
                        <span>Personal Project, May 2024 – July 2024</span>
                    </div>
                    <div>
                        <a href="https://github.com/YutongDaisyHe/GPT-Recipe"
                           target="_blank"
                           rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="1x"
                                             className="project-github-icon pe-1"/>
                            https://github.com/YutongDaisyHe/GPT-Recipe
                        </a>
                    </div>
                    <div className="project-details">
                        <div>
                            <span>Front-end Development:</span>
                            <ul>
                                <li>Designed a user-friendly interface for inputting preferences
                                    and ensured high-quality, visually appealing recipe layouts.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span>Back-end Development:</span>
                            <ul>
                                <li>Developed an innovative multi-agent application using
                                    OpenAI API, Tavily API, and LangGraph framework to create
                                    personalized recipe books tailored to user preferences.
                                </li>
                                <li>Implemented distinct AI agents for searching, curating,
                                    writing, critiquing, designing, editing, and publishing recipes.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="project-skills">
                        <div className="skill">Python</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">HTML/CSS</div>
                        <div className="skill">LangGraph</div>
                        <div className="skill">OpenAI API</div>
                        <div className="skill">Tavily API</div>
                    </div>
                </div>
            </div>

            {/* Project 2 */}
            <div className="row col-12 project">
                <div className="col-12 col-md-6 project-image-container">
                    <Carousel showThumbs={false} className="carousel-slider">
                        {gfimages.map((src, index) => (
                            <div key={index} className="slide">
                                <img src={src} alt={`GoalForIt Screenshot ${index + 1}`} className="project-image" />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="col-12 col-md-6 project-content">
                    <div className="project-header">
                        <span>GoalForIt! Goals Tracking and Habits Building Mobile Application</span>
                    </div>
                    <div>
                        <span>Course Project, Northeastern University, January 2023 – April 2023</span>
                    </div>
                    <div>
                        <a href="https://github.com/YutongDaisyHe/CS5520_GoalsTrackingApp"
                           target="_blank"
                           rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="1x"
                                             className="project-github-icon pe-1"/>
                            https://github.com/YutongDaisyHe/CS5520_GoalsTrackingApp
                        </a>
                    </div>
                    <div className="project-details">
                        <div>
                            <span>Front-end Development:</span>
                            <ul>
                                <li>Designed and implemented intuitive user interfaces for various
                                    screens.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span>Back-end Development:</span>
                            <ul>
                                <li>Utilized Firebase real-time database to establish seamless data
                                    connectivity among users and messages.
                                </li>
                                <li>Implemented essential app features such as profile editing,
                                    friend management, and notification messaging.
                                </li>
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
            <div className="row project">
                <div className="col-12 col-md-6 project-image-container">
                    <Carousel showThumbs={false} className="carousel-slider">
                        {rfimages.map((src, index) => (
                            <div key={index} className="slide">
                                <img src={src} alt={`RecipeFridge Screenshot ${index + 1}`}
                                     className="project-image" />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="col-12 col-md-6 project-content">
                    <div className="project-header">
                        <span>RecipeFridge Recipe Creating and Searching Web Application</span>
                    </div>
                    <div>
                        <span>Course Project, Northeastern University, October 2022 – December 2022</span>
                    </div>
                    <div>
                        <a href="https://github.com/YutongDaisyHe/CS5610_FridgeRecipeWebProject_React"
                           target="_blank"
                           rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="1x"
                                             className="project-github-icon pe-1"/>
                            https://github.com/YutongDaisyHe/CS5610_FridgeRecipeWebProject_React
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/YutongDaisyHe/CS5610_FridgeRecipeWebProject_Node"
                           target="_blank"
                           rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="1x"
                                             className="project-github-icon pe-1"/>
                            https://github.com/YutongDaisyHe/CS5610_FridgeRecipeWebProject_Node
                        </a>
                    </div>
                    <div className="project-details">
                        <div>
                            <span>Front-end Development:</span>
                            <ul>
                                <li>Designed and implemented UI for multiple key pages, focusing on
                                    intuitive navigation and user-friendly interfaces.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span>Back-end Development:</span>
                            <ul>
                                <li>Established robust data connectivity with MongoDB to enable
                                    seamless data exchange among users and recipes.
                                </li>
                                <li>Executed comprehensive implementation of user management, recipe
                                    creation, and friend interaction functionalities.
                                </li>
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
            <div className="row project">
                <div className="col-12 col-md-6 project-image-container">
                    <Carousel showThumbs={false} className="carousel-slider">
                        {trimages.map((src, index) => (
                            <div key={index} className="slide">
                                <img src={src} alt={`TuiterRestaurant Screenshot ${index + 1}`}
                                     className="project-image"/>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="col-12 col-md-6 project-content">
                    <div className="project-header">
                        <span>Integrating a Customer-Restaurant Interaction Module to A Social Media Web Application</span>
                    </div>
                    <div>
                        <span>Course Project, Northeastern University, October 2022 – December 2022</span>
                    </div>
                    <div>
                        <a href="https://github.com/YutongDaisyHe/CS5500_FinalProject_React"
                           target="_blank"
                           rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="1x"
                                             className="project-github-icon pe-1"/>
                            https://github.com/YutongDaisyHe/CS5500_FinalProject_React
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/YutongDaisyHe/CS5500_FinalProject_Node"
                           target="_blank"
                           rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="1x"
                                             className="project-github-icon pe-1"/>
                            https://github.com/YutongDaisyHe/CS5500_FinalProject_Node
                        </a>
                    </div>
                    <div className="project-details">
                        <span>Team Leadership & Agile Management:</span>
                        <ul>
                            <li>Led a team in adhering to Scrum Agile methodologies to integrate a
                                customer-restaurant feature into a social media platform.
                            </li>
                        </ul>
                        <span>Back-end Development:</span>
                        <ul>
                            <li>Crafted and deployed user authentication systems for different user
                                types.
                            </li>
                            <li>Implemented and rigorously tested RESTful Web Services for data
                                management.
                            </li>
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
            <div className="row project">
                <div className="col-12 col-md-6 project-image-container">
                    <Carousel showThumbs={false} showStatus={false}>
                        <div>
                            <img src={nlpProjectImage} alt="NLP Project Screenshot"
                                 className="project-image"/>
                        </div>

                    </Carousel>
                </div>
                <div className="col-12 col-md-6 project-content">
                    <div className="project-header">
                        <span>Using NLP/Machine Learning for Bibliography Parsing</span>
                    </div>
                    <div>
                        <span>XN Rising Project, Northeastern University & Pfizer, January 2022 – April 2022</span>
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

