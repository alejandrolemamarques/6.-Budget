import React, { useState } from "react";
import styles from "./index.module.css";
import { useCalculator } from "../../hooks/useCalculator";
import { QuoteCardProps } from "../../context/CalculatorContext";

const QuoteForm: React.FC = () => {
    const { selectedServices, totalPrice, addQuote, webPages, webLanguages } =
        useCalculator();
    const WEB_SERVICE_ID = 3;

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    // Handle input change from the form
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedServices.length === 0) {
            alert("Please select at least one service");
            return;
        }

        // Create new quote using all properties from QuoteCardProps, except id
        const newQuote: Omit<QuoteCardProps, "id"> = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            services: [...selectedServices],
            totalPrice: totalPrice,
        };

        // Add web service details if web service is selected
        if (selectedServices.includes(WEB_SERVICE_ID)) {
            newQuote.webPages = webPages;
            newQuote.webLanguages = webLanguages;
        }

        addQuote(newQuote);

        // Reset form
        setFormData({
            name: "",
            phone: "",
            email: "",
        });
    };

    return (
        <div className={styles.quotesGeneratorContainer}>
            <h2>Request a quote</h2>
            <p>
                Fill in the form below to request a detailed quote for your
                project.
            </p>
            <form
                className={styles.quotesGeneratorForm}
                onSubmit={handleSubmit}
            >
                <div className={styles.formGroup}>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone"></label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Request quote &rarr;</button>
            </form>
        </div>
    );
};

export default QuoteForm;
