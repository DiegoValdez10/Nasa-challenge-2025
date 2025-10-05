import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Función para verificar si el link está activo
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-brand">
                    <svg 
                        className="nav-icon" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M12 1v6m0 6v6"/>
                        <path d="M1 12h6m6 0h6"/>
                        <path d="M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24"/>
                        <path d="M18.36 5.64l-4.24 4.24m-4.24 4.24l-4.24 4.24"/>
                    </svg>
                    <div className="nav-title">
                        <h1>ISS Experience</h1>
                        <p className="nav-subtitle">25 Years of Discovery</p>
                    </div>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link 
                            to="/" 
                            className={`nav-link ${isActive('/') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/cupola" 
                            className={`nav-link ${isActive('/cupola') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            The Cupola
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/nbl" 
                            className={`nav-link ${isActive('/nbl') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            NBL Training
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/benefits" 
                            className={`nav-link ${isActive('/benefits') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Benefits
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/history" 
                            className={`nav-link ${isActive('/history') ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            History
                        </Link>
                    </li>
                </ul>

                <button 
                    className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
