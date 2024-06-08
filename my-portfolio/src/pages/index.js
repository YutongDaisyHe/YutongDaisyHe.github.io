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
import About from "../pages/about";

const IndexPage = () => (

    <About/>


);

export default IndexPage;
