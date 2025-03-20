import React from "react";
import styles from "./index.module.css";

const InfoSection: React.FC = () => {
    return (
        <div className={styles.infoSection}>
            <div className={styles.infoCard}>
                <h2>How it works</h2>
                <ol className={styles.stepsList}>
                    <li>Select the services you're interested in</li>
                    <li>Customize options for each service if available</li>
                    <li>Get an instant price estimate</li>
                    <li>Contact us to finalize your quote</li>
                </ol>
            </div>

            <div className={styles.infoCard}>
                <h2>Why choose us</h2>
                <ul className={styles.benefitsList}>
                    <li>Professional quality at competitive prices</li>
                    <li>Transparent pricing with no hidden fees</li>
                    <li>Customized solutions for your specific needs</li>
                    <li>Ongoing support after project completion</li>
                </ul>
            </div>
        </div>
    );
};

export default InfoSection;
