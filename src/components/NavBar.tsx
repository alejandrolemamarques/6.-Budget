import { useState } from "react";
import styles from "./navBar.module.css";
import logo from "../assets/it_academy_logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>

            {/* Desktop Menu */}
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Link to="/" onClick={closeMenu}>
                        <img
                            src={logo}
                            alt="Web Services Logo"
                            className={styles.logo}
                        />
                    </Link>
                </div>
                <ul className={styles.navLinks}>
                    <li className={styles.navItem}>
                        <Link to="/" className={styles.navLink}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/calculator" className={styles.navLink}>
                            Calculator
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/" className={styles.navLink}>
                            Services
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/" className={styles.navLink}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <button
                    className={styles.menuButton}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    
                    {/* Hamburger Menu */}
                    <div
                        className={`${styles.hamburger} ${
                            isMenuOpen ? styles.open : ""
                        }`}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${styles.mobileMenu} ${
                    isMenuOpen ? styles.open : ""
                }`}
            >
                <ul className={styles.mobileNavLinks}>
                    <li className={styles.navItem}>
                        <Link
                            to="/"
                            className={styles.navLink}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link
                            to="/calculator"
                            className={styles.navLink}
                            onClick={closeMenu}
                        >
                            Calculator
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link
                            to="/"
                            className={styles.navLink}
                            onClick={closeMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link
                            to="/"
                            className={styles.navLink}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
