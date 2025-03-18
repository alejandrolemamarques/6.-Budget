import React from "react";
import styles from "./webOptions.module.css";

interface WebOptionsProps {
    onPagesChange: (pages: number) => void;
    onLanguagesChange: (languages: number) => void;
    pages: number;
    languages: number;
}

const WebOptions: React.FC<WebOptionsProps> = ({
    onPagesChange,
    onLanguagesChange,
    pages,
    languages,
}) => {
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
                    onClick={() => handleValueChange(pages - 1, onPagesChange)}
                    className={styles.button}
                    disabled={pages <= 1}
                >
                    -
                </button>
                <input
                    type="number"
                    id="pages"
                    min="1"
                    value={pages}
                    onChange={(e) =>
                        handleValueChange(
                            parseInt(e.target.value) || 1,
                            onPagesChange
                        )
                    }
                    className={styles.input}
                />
                <button
                    onClick={() => handleValueChange(pages + 1, onPagesChange)}
                    className={styles.button}
                >
                    +
                </button>
            </div>
            <div className={styles.optionGroup}>
                <label htmlFor="languages">Number of languages:</label>
                <button
                    onClick={() =>
                        handleValueChange(languages - 1, onLanguagesChange)
                    }
                    className={styles.button}
                    disabled={languages <= 1}
                >
                    -
                </button>
                <input
                    type="number"
                    id="languages"
                    min="1"
                    value={languages}
                    onChange={(e) =>
                        handleValueChange(
                            parseInt(e.target.value) || 1,
                            onLanguagesChange
                        )
                    }
                    className={styles.input}
                />
                <button
                    onClick={() =>
                        handleValueChange(languages + 1, onLanguagesChange)
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
