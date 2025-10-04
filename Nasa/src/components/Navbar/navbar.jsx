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
                    <span className="nav-icon">🛰️</span>
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