import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Charan</a>

                <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">About Me</a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">Skills</a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">Services</a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">Projects</a>
                        </li>
                        <li className="nav__item">
                            <a href="#testimonials" className="nav__link">Testimonials</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">Contact</a>
                        </li>
                        <li className="nav__item">
                            <a href="path/to/your/CV.pdf" className="nav__link nav__button" download>
                                Download CV
                            </a>
                        </li>
                    </ul>
                    {isMenuOpen && (
                        <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
                    )}
                </div>

                <div className="nav__toggle" onClick={toggleMenu}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
