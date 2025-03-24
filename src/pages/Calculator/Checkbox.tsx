import React from "react";
import styles from "./checkbox.module.css";
import { useCalculator } from "@/hooks/useCalculator";
import "@/styles/variables.css";

interface CheckboxProps {
    data: {
        id: number;
        name: string;
        description: string;
        price: number;
    };
    isSelected: boolean;
    children?: React.ReactNode;
}

const Checkbox = ({ data, isSelected, children }: CheckboxProps) => {
    const { handleCheckboxChange } = useCalculator();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleCheckboxChange(data.id, e.target.checked);
    };

    return (
        <div
            className={`${styles.checkboxContainer} ${
                isSelected ? styles.selected : ""
            }`}
        >
            <div className={styles.mainContent}>
                {/* Checkbox Text Container */}
                <div className={styles.checkboxTextContainer}>
                    <h2 className={styles.name}>{data.name}</h2>
                    <p className={styles.description}>{data.description}</p>
                </div>

                {/* Checkbox Price Container */}
                <div className={styles.checkboxPriceContainer}>
                    <p className={styles.price}>{data.price}€</p>
                </div>

                {/* Checkbox Input Container */}
                <div className={styles.checkboxIButtonContainer}>
                    <input
                        id={`checkbox-${data.id}`}
                        type="checkbox"
                        className={styles.checkboxInput}
                        checked={isSelected}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor={`checkbox-${data.id}`}
                        className={styles.label}
                    >
                        {isSelected ? "Added" : "Add"}
                    </label>
                </div>
            </div>
            {isSelected && children && (
                <div className={styles.optionsContainer}>{children}</div>
            )}
        </div>
    );
};

export default Checkbox;
