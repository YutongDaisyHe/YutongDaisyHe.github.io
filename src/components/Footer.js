import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const [isContactPage, setIsContactPage] = useState(false);

    useEffect(() => {
        setIsContactPage(location.pathname.includes('contact'));
    }, [location.pathname]);

    return (
        <footer>
            {!isContactPage && (
                <section className="contact">
                    <div>
                        <a href="mailto:hytdaisy@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} /> hytdaisy@gmail.com
                        </a>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/yutonghe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} /> https://www.linkedin.com/in/yutonghe
                    </a>
                </section>
                )}
            <p className="copyright">&copy; {new Date().getFullYear()} By Yutong (Daisy) He.</p>
        </footer>
    );
};

export default Footer;
