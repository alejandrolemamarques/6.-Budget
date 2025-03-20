import React from "react";
import styles from "./webOptions.module.css";
import { useCalculator } from "../../hooks/useCalculator";
import "../../styles/variables.css";

const WebOptions: React.FC = () => {
    const { webPages, webLanguages, setWebPages, setWebLanguages } =
        useCalculator();

    const handleValueChange = (
        value: number,
        onChange: (val: number) => void
    ) => {
        // Ensure the value is not less than 1
        const newValue = Math.max(1, value);
        onChange(newValue);
    };

    return (
        <div className={styles.webOptionsContainer}>
            <div className={styles.optionGroup}>
                <label htmlFor="pages">Number of pages:</label>
                <button
                    onClick={() => handleValueChange(webPages - 1, setWebPages)}
                    className={styles.button}
                    disabled={webPages <= 1}
                >
                    -
                </button>
                <input
                    type="number"
                    id="pages"
                    min="1"
                    value={webPages}
                    onChange={(e) =>
                        handleValueChange(
                            parseInt(e.target.value) || 1,
                            setWebPages
                        )
                    }
                    className={styles.input}
                />
                <button
                    onClick={() => handleValueChange(webPages + 1, setWebPages)}
                    className={styles.button}
                >
                    +
                </button>
            </div>
            <div className={styles.optionGroup}>
                <label htmlFor="languages">Number of languages:</label>
                <button
                    onClick={() =>
                        handleValueChange(webLanguages - 1, setWebLanguages)
                    }
                    className={styles.button}
                    disabled={webLanguages <= 1}
                >
                    -
                </button>
                <input
                    type="number"
                    id="languages"
                    min="1"
                    value={webLanguages}
                    onChange={(e) =>
                        handleValueChange(
                            parseInt(e.target.value) || 1,
                            setWebLanguages
                        )
                    }
                    className={styles.input}
                />
                <button
                    onClick={() =>
                        handleValueChange(webLanguages + 1, setWebLanguages)
                    }
                    className={styles.button}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default WebOptions;
