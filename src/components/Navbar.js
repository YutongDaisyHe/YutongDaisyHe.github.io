import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
    const activeStyles = {
        fontWeight: "bold",
        color: "lightseagreen",
    };

    return (
        <header>
            <Link to="/">
                <h2 className="fw-bolder">Yutong (Daisy) He</h2>
            </Link>
            <nav className="navbar">
                <NavLink to="/about" activeStyles={activeStyles}>
                    About
                </NavLink>
                <a
                    href="/YutongHe_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-link"
                >
                    Resume
                </a>
                <NavLink to="/projects" activeStyles={activeStyles}>
                    Projects
                </NavLink>
                {/*<NavLink to="/teaching" activeStyles={activeStyles}>*/}
                {/*    Teaching*/}
                {/*</NavLink>*/}
                <NavLink to="/contact" activeStyles={activeStyles}>
                    Contact
                </NavLink>
            </nav>
        </header>
    );
};

// Custom NavLink component to manage active state
const NavLink = ({ to, children, activeStyles }) => {
    return (
        <Link
            to={to}
            className="navbar-link"
            activeClassName="active"
            activeStyle={activeStyles}
        >
            {children}
        </Link>
    );
};

export default Navbar;
