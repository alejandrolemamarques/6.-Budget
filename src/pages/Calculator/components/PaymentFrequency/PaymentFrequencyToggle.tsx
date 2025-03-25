import React from "react";
import { useCalculator } from "@/hooks/useCalculator";
import styles from "./paymentFrequencyToggle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDay,
    faCalendarAlt,
    faPercent,
} from "@fortawesome/free-solid-svg-icons";

const PaymentFrequencyToggle: React.FC = () => {
    const { paymentFrequency, setPaymentFrequency } = useCalculator();

    return (
        <div className={styles.toggleContainer}>
            <h3 className={styles.toggleTitle}>Choose your billing cycle</h3>
            <div className={styles.toggleWrapper}>
                <div
                    className={`${styles.option} ${
                        paymentFrequency === "monthly" ? styles.active : ""
                    }`}
                >
                    <FontAwesomeIcon
                        icon={faCalendarDay}
                        className={styles.icon}
                    />
                    <div className={styles.optionContent}>
                        <span className={styles.label}>Monthly</span>
                        <span className={styles.description}>
                            Regular price
                        </span>
                    </div>
                </div>

                <button
                    className={`${styles.toggleSwitch} ${
                        paymentFrequency === "yearly" ? styles.active : ""
                    }`}
                    onClick={() =>
                        setPaymentFrequency(
                            paymentFrequency === "monthly"
                                ? "yearly"
                                : "monthly"
                        )
                    }
                    aria-label={`Switch to ${
                        paymentFrequency === "monthly" ? "yearly" : "monthly"
                    } billing`}
                >
                    <div className={styles.toggleTrack}>
                        <div className={styles.toggleThumb} />
                    </div>
                </button>

                <div
                    className={`${styles.option} ${
                        paymentFrequency === "yearly" ? styles.active : ""
                    }`}
                >
                    <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className={styles.icon}
                    />
                    <div className={styles.optionContent}>
                        <span className={styles.label}>Yearly</span>
                        <div className={styles.savingsBadge}>
                            <FontAwesomeIcon
                                icon={faPercent}
                                className={styles.savingsIcon}
                            />
                            <span>Save 20%</span>
                        </div>
                    </div>
                </div>
            </div>
            {paymentFrequency === "yearly" && (
                <p className={styles.savingsMessage}>
                    You're saving 20% with yearly billing!
                </p>
            )}
        </div>
    );
};

export default PaymentFrequencyToggle;
