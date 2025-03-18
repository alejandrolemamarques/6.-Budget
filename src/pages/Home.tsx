import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import webDevelopment from "../assets/web_development.jpg";
import seo from "../assets/seo.jpg";
import onlineAdvertising from "../assets/online_advertising.jpg";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        <span className={styles.mainText}>Web Services</span>
                        <span
                            className={styles.subText}
                        >{`< Enhance your online presence`}</span>
                        <span className={styles.highlightText}>
                            professional
                        </span>
                        <span className={styles.subText}>{`_/>`}</span>
                    </h1>
                    <Link to="/calculator" className={styles.ctaButton}>
                        Calculate your quote
                    </Link>
                </div>
            </div>

            <div className={styles.statsSection}>
                <div className={styles.statsOverlay}>
                    <h2>92% of our clients</h2>
                    <p>
                        have increased their sales after implementing our web
                        services
                    </p>
                </div>
            </div>

            <div className={styles.servicesSection}>
                <h2 className={styles.sectionTitle}>OUR SERVICES</h2>
                <div className={styles.servicesGrid}>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceImageContainer}>
                            <div className={styles.serviceImagePlaceholder}>
                                <img
                                    src={webDevelopment}
                                    alt="Web Development"
                                />
                            </div>
                        </div>
                        <h3>Modern Web Development</h3>
                        <p>
                            We develop responsive websites with professional and
                            customized designs that adapt to all devices.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceImageContainer}>
                            <div className={styles.serviceImagePlaceholder}>
                                <img src={seo} alt="SEO" />
                            </div>
                        </div>
                        <h3>SEO Optimization</h3>
                        <p>
                            Improve your business visibility in search engines
                            and achieve higher rankings with our optimization
                            services.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceImageContainer}>
                            <div className={styles.serviceImagePlaceholder}>
                                <img
                                    src={onlineAdvertising}
                                    alt="Online Advertising"
                                />
                            </div>
                        </div>
                        <h3>Online Advertising</h3>
                        <p>
                            Increase traffic and conversions with our customized
                            ad campaigns and strategic marketing solutions.
                        </p>
                    </div>
                </div>
                <div className={styles.ctaContainer}>
                    <Link to="/calculator" className={styles.secondaryCta}>
                        Calculate the cost of your services
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
