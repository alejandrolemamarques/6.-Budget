import React from "react";
import styles from "./styles.module.css";

const InfoSection: React.FC = () => {
    return (
        <div className={styles.infoSection}>
            <div className={styles.infoCard}>
                <h2>How it works</h2>
                <ol className={styles.stepsList}>
                    <li>Select the services you need</li>
                    <li>Customize your options</li>
                    <li>Fill in your details</li>
                    <li>Get your instant quote</li>
                </ol>
            </div>
            <div className={styles.infoCard}>
                <h2>Benefits</h2>
                <ul className={styles.benefitsList}>
                    <li>Professional web development services</li>
                    <li>SEO optimization included</li>
                    <li>Responsive design for all devices</li>
                    <li>Fast and reliable hosting</li>
                </ul>
            </div>
        </div>
    );
};

export default InfoSection;
