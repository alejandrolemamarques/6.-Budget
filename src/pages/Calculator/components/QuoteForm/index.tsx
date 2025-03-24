import React, { useState } from "react";
import styles from "./styles.module.css";
import { useCalculator } from "@/hooks/useCalculator";

const QuoteForm: React.FC = () => {
    const { addQuote, selectedServices, totalPrice, webPages, webLanguages } =
        useCalculator();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!name || !email || !phone) {
            setError("Please fill in all required fields");
            return;
        }

        if (selectedServices.length === 0) {
            setError("Please select at least one service");
            return;
        }

        addQuote({
            name,
            email,
            phone,
            date: new Date().toLocaleDateString(),
            services: selectedServices,
            totalPrice,
            webPages,
            webLanguages,
        });

        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setError("");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.quoteForm}>
            <div className={styles.formFields}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
            </div>
            {error && <div className={styles.errorMessage}>{error}</div>}
            <button type="submit" className={styles.submitButton}>
                Get Quote
            </button>
        </form>
    );
};

export default QuoteForm;
