import React from "react";
import styles from "./checkbox.module.css";

interface CheckboxProps {
    data: {
        id: number;
        name: string;
        description: string;
        price: number;
    };
    onChange: (
        serviceId: number, 
        isChecked: boolean
    ) => void;
    isSelected: boolean;
}

const Checkbox = ({ data, onChange, isSelected }: CheckboxProps) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(data.id, e.target.checked);
    };

    return (
        <div className={styles.checkboxContainer}>
            <div className={styles.checkboxTextContainer}>
                <h2 className={styles.name}>{data.name}</h2>
                <p className={styles.description}>{data.description}</p>
            </div>
            <div className={styles.checkboxPriceContainer}>
                <p className={styles.price}>{data.price}€</p>
            </div>
            <div className={styles.checkboxInputContainer}>
                <input
                    id={`checkbox-${data.id}`}
                    type="checkbox"
                    className={styles.checkboxInput}
                    checked={isSelected}
                    onChange={handleChange}
                />
                <label htmlFor={`checkbox-${data.id}`} className={styles.label}>
                    Afegir
                </label>
            </div>
        </div>
    );
};

export default Checkbox;
