import React from "react";
import { useCalculator } from "@/hooks/useCalculator";
import styles from "./PaymentFrequencyToggle.module.css";

const PaymentFrequencyToggle: React.FC = () => {
    const { paymentFrequency, setPaymentFrequency } = useCalculator();

    return (
        <div className={styles.toggleContainer}>
            <div className={styles.toggleWrapper}>
                <span className={styles.label}>Monthly</span>
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
                <span className={styles.label}>
                    Yearly
                    <span className={styles.discountBadge}>-20%</span>
                </span>
            </div>
        </div>
    );
};

export default PaymentFrequencyToggle;
