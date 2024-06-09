import { Link } from "gatsby";
import React from "react";

const Navbar = () => (
    <header>
        <Link to="/">
            <h2 className="fw-bolder">Yutong (Daisy) He</h2>
        </Link>
        <nav className="navbar">
            <Link to="/about">About</Link>
            {/*<Link to="/">Home</Link>*/}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <Link to="/projects">Projects</Link>
            <Link to="/teaching">Teaching</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </header>
);

export default Navbar;