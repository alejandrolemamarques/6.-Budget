import React from "react";
import styles from "./index.module.css";
import { CalculatorProvider } from "../../context/CalculatorContext";
import InfoSection from "./InfoSection";
import ServiceSelectionSection from "./ServiceSelectionSection";
import QuoteForm from "./QuoteForm";
import QuotesList from "./QuotesList";
import "../../styles/variables.css";

// Separating the calculator content from the provider wrapper
const CalculatorContent: React.FC = () => {
    return (
        <div className={styles.calculatorContainer}>
            {/* Header Section */}
            <div className={styles.headerSection}>
                <h1 className={styles.title}>Web Services Calculator</h1>
                <p className={styles.subtitle}>
                    Select the services you need and customize your options to
                    get an instant quote
                </p>
            </div>

            {/* Wrapper */}
            <div className={styles.contentWrapper}>
                {/* Info Section */}
                <InfoSection />

                {/* Service Selection and Quote Form Section */}
                <div className={styles.formContainer}>
                    <ServiceSelectionSection />
                    <QuoteForm />
                </div>
            </div>

            {/* Quotes List Container */}
            <QuotesList />
        </div>
    );
};

// Main component that wraps the content with the provider
const Calculator: React.FC = () => {
    return (
        <CalculatorProvider>
            <CalculatorContent />
        </CalculatorProvider>
    );
};

export default Calculator;
