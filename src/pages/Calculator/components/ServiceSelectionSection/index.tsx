import React from "react";
import styles from "./styles.module.css";
import { useCalculator } from "@/hooks/useCalculator";
import Checkbox from "@/pages/Calculator/components/Checkbox/Checkbox";
import WebOptions from "@/pages/Calculator/components/QuoteForm/webOptions/WebOptions";
import PaymentFrequencyToggle from "@/pages/Calculator/components/PaymentFrequency/PaymentFrequencyToggle";
import catalog from "@/data/catalog.json";

const ServiceSelectionSection: React.FC = () => {
    const { selectedServices, totalPrice, paymentFrequency } = useCalculator();

    const originalPrice =
        totalPrice / (paymentFrequency === "yearly" ? 0.8 : 1);

    return (
        <div className={styles.serviceSelectionSection}>
            <div className={styles.sectionHeader}>
                <h2>Select your services</h2>
                <PaymentFrequencyToggle />
            </div>
            {paymentFrequency === "yearly" && (
                <div className={styles.discountMessage}>
                    Save 20% with yearly billing
                </div>
            )}
            <div className={styles.servicesContainer}>
                {catalog.services.map((service) => (
                    <Checkbox
                        key={service.id}
                        data={service}
                        isSelected={selectedServices.includes(service.id)}
                    >
                        {service.id === 3 && <WebOptions />}
                    </Checkbox>
                ))}
            </div>
            <div className={styles.totalPriceSection}>
                <div className={styles.totalPriceWrapper}>
                    <h3>Total Price</h3>
                    <div className={styles.priceDisplay}>
                        {paymentFrequency === "yearly" ? (
                            <>
                                <span className={styles.originalPrice}>
                                    {originalPrice}€
                                </span>
                                <span className={styles.discountedPrice}>
                                    {totalPrice}€
                                </span>
                                <span className={styles.billingPeriod}>
                                    per month
                                </span>
                            </>
                        ) : (
                            <>
                                <span className={styles.price}>
                                    {totalPrice}€
                                </span>
                                <span className={styles.billingPeriod}>
                                    per month
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSelectionSection;
