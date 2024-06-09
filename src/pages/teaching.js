import React from 'react';
import Layout from '../components/Layout';
import '../styles/teaching.css';

const Teaching = () => (
    <Layout>
        <div className="layout">
        <div className="container">
            <h2 className="fw-bolder align-content-center p-2">Teaching Experience</h2>

            <div className="teaching-card">
                <div className="teaching-content">
                    <div className="teaching-header">
                        <h3>Pelham Middle School & Pelham Memorial High School, Pelham, NY</h3>
                        <span>September 2015 – June 2021</span>
                    </div>
                    <div className="teaching-details">
                        <h4>Tenured Mandarin Teacher, Grades 6-12</h4>
                        <ul>
                            <li>Founded and expanded the Mandarin program for grades 6-12 in Pelham Public School District.</li>
                            <li>Designed curricula for seven consecutive Mandarin courses and taught in grades 6-12.</li>
                            <li>Advised Mandarin Club in middle school and Asian Culture Club in high school.</li>
                            <li>Established the Pelham Memorial High School Chapter of the National Chinese Honor Society.</li>
                            <li>Organized class field trips, school-wide and community-wide events annually.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </Layout>
);

export default Teaching;
