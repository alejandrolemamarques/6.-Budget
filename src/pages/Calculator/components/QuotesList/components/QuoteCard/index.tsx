import React from "react";
import { useCalculator } from "@/hooks/useCalculator";
import styles from "./styles.module.css";
import catalog from "@/data/catalog.json";
import { QuoteCardProps } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faCalendarAlt,
    faList,
    faGlobe,
    faEuroSign,
    faTimes,
    faClock,
    faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

const QuoteCard: React.FC<QuoteCardProps> = ({
    id,
    name,
    email,
    phone,
    date,
    services,
    webPages,
    webLanguages,
    totalPrice,
    paymentFrequency,
}) => {
    const { deleteQuote } = useCalculator();

    const selectedServicesList = catalog.services.filter((service) =>
        services.includes(service.id)
    );

    const getPaymentFrequencyIcon = () => {
        return paymentFrequency === "yearly" ? faCalendarCheck : faClock;
    };

    const getPaymentFrequencyLabel = () => {
        return paymentFrequency === "yearly"
            ? "Yearly Payment"
            : "Monthly Payment";
    };

    return (
        <div className={styles.quoteCard}>
            <div className={styles.quoteHeader}>
                <h3>{name}</h3>
                <button
                    onClick={() => deleteQuote(id!)}
                    className={styles.deleteButton}
                    aria-label="Delete quote"
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className={styles.quoteDetails}>
                <p>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className={styles.icon}
                    />
                    <strong>Email:</strong> {email}
                </p>
                <p>
                    <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                    <strong>Phone:</strong> {phone}
                </p>
                <p>
                    <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className={styles.icon}
                    />
                    <strong>Date:</strong> {new Date(date).toLocaleDateString()}
                </p>
            </div>
            <div className={styles.servicesList}>
                <h4>
                    <FontAwesomeIcon icon={faList} className={styles.icon} />
                    Selected Services:
                </h4>
                <ul>
                    {selectedServicesList.map((service) => (
                        <li key={service.id}>{service.name}</li>
                    ))}
                </ul>
                {webPages && webLanguages && (
                    <p className={styles.webDetails}>
                        <FontAwesomeIcon
                            icon={faGlobe}
                            className={styles.icon}
                        />
                        Web Details: {webPages} pages, {webLanguages} languages
                    </p>
                )}
            </div>
            <div className={styles.quoteFooter}>
                <div className={styles.paymentInfo}>
                    <div
                        className={`${styles.paymentBadge} ${styles[paymentFrequency]}`}
                    >
                        <FontAwesomeIcon icon={getPaymentFrequencyIcon()} />
                        <span>{getPaymentFrequencyLabel()}</span>
                    </div>
                </div>
                <p className={styles.totalPrice}>
                    Total:{" "}
                    <span>
                        <FontAwesomeIcon
                            icon={faEuroSign}
                            className={styles.icon}
                        />
                        {totalPrice.toFixed(2)}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default QuoteCard;
