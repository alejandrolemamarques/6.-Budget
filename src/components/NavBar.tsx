import styles from "./navBar.module.css";
import logo from "../assets/it_academy_logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Link to="/">
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
            </div>
        </nav>
    );
}
