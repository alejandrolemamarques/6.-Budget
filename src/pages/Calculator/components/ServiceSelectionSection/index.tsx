import React from "react";
import styles from "./styles.module.css";
import { useCalculator } from "@/hooks/useCalculator";
import Checkbox from "@/pages/Calculator/Checkbox";
import WebOptions from "@/pages/Calculator/WebOptions";
import catalog from "@/data/catalog.json";

const ServiceSelectionSection: React.FC = () => {
    const { selectedServices } = useCalculator();

    return (
        <div className={styles.serviceSelectionSection}>
            <h2>Select your services</h2>
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
        </div>
    );
};

export default ServiceSelectionSection;
