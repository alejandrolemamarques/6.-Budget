import React from "react";
import styles from "./index.module.css";
import { CalculatorProvider } from "@/context/CalculatorContext";
import InfoSection from "./components/InfoSection";
import ServiceSelectionSection from "./components/ServiceSelectionSection";
import QuoteForm from "./components/QuoteForm";
import QuotesList from "./components/QuotesList";
import "@/styles/variables.css";

// Separating the calculator content from the provider wrapper
const CalculatorContent: React.FC = () => {
    return (
        <div className={styles.calculatorContainer}>
            {/* Header Section */}
            <header className={styles.headerSection}>
                <h1 className={styles.title}>Web Services Calculator</h1>
                <p className={styles.subtitle}>
                    Select the services you need and customize your options to
                    get an instant quote
                </p>
            </header>

            {/* Main Content */}
            <main>
                {/* Left Column */}
                <section className={styles.contentWrapper}>
                    <InfoSection />
                    <div className={styles.formContainer}>
                        <ServiceSelectionSection />
                        <QuoteForm />
                    </div>
                </section>

                {/* Quotes List Section */}
                <section>
                    <QuotesList />
                </section>
            </main>
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
