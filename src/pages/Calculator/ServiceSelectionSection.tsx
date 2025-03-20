import React from "react";
import styles from "./index.module.css";
import Checkbox from "./Checkbox";
import WebOptions from "./WebOptions";
import { useCalculator } from "../../hooks/useCalculator";
import catalog from "../../data/catalog.json";

const ServiceSelectionSection: React.FC = () => {
    const { selectedServices, totalPrice } = useCalculator();
    const WEB_SERVICE_ID = 3;

    return (
        <div>
            <h2 className={styles.formTitle}>Select Your Services</h2>

            {/* Services Container */}
            <div className={styles.servicesContainer}>
                {catalog.services.map((service) => (
                    <Checkbox
                        key={service.id}
                        data={service}
                        isSelected={selectedServices.includes(service.id)}
                    >
                        {service.id === WEB_SERVICE_ID &&
                            selectedServices.includes(WEB_SERVICE_ID) && (
                                <WebOptions />
                            )}
                    </Checkbox>
                ))}
            </div>

            {/* Total Container */}
            <div className={styles.totalContainer}>
                <h2 className={styles.totalText}>
                    Estimated price:{" "}
                    <span className={styles.totalPrice}>{totalPrice}€</span>
                </h2>
            </div>
        </div>
    );
};

export default ServiceSelectionSection;
