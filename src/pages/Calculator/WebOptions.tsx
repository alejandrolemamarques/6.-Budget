import React, { useState } from "react";
import styles from "./webOptions.module.css";
import { useCalculator } from "@/hooks/useCalculator";
import Tooltip from "@/pages/Calculator/Tooltip";
import "@/styles/variables.css";

interface TooltipState {
    isVisible: boolean;
    tooltipType: "pages" | "languages" | null;
}

const WebOptions: React.FC = () => {
    const { webPages, webLanguages, setWebPages, setWebLanguages } =
        useCalculator();

    const [tooltipState, setTooltipState] = useState<TooltipState>({
        isVisible: false,
        tooltipType: null,
    });

    const handleValueChange = (
        value: number,
        onChange: (val: number) => void
    ) => {
        // Ensure the value is not less than 1
        const newValue = Math.max(1, value);
        onChange(newValue);
    };

    const showTooltip = (type: "pages" | "languages") => {
        setTooltipState({
            isVisible: true,
            tooltipType: type,
        });
    };

    const hideTooltip = () => {
        setTooltipState({
            isVisible: false,
            tooltipType: null,
        });
    };

    // Content for the Pages tooltip
    const pagesContent = (
        <>
            <p>
                This refers to the total number of unique web pages that will be
                created for your website. Each page requires design and
                development work.
            </p>
            <p>Examples: Home page, About Us, Services, Contact, etc.</p>
            <p>
                <strong>Cost Impact:</strong> More pages increases the total
                cost of your website.
            </p>
        </>
    );

    // Content for the Languages tooltip
    const languagesContent = (
        <>
            <p>
                This determines how many different language versions of your
                website will be created.
            </p>
            <p>
                Each language requires translation and localization of all
                content, including images with text and special regional
                considerations.
            </p>
            <p>
                <strong>Cost Impact:</strong> Multiple languages require
                additional development time and translation services.
            </p>
        </>
    );

    return (
        <div className={styles.webOptionsContainer}>
            {/* Number of pages */}
            <div className={styles.optionGroup}>
                <div className={styles.labelContainer}>
                    <label htmlFor="pages">Number of pages:</label>
                    <button
                        className={styles.infoButton}
                        onClick={(e) => {
                            e.stopPropagation();
                            showTooltip("pages");
                        }}
                        aria-label="Information about number of pages"
                    >
                        <span className={styles.infoIcon}>ⓘ</span>
                    </button>
                </div>
                <div className={styles.controlsContainer}>
                    <button
                        onClick={() =>
                            handleValueChange(webPages - 1, setWebPages)
                        }
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
                        onClick={() =>
                            handleValueChange(webPages + 1, setWebPages)
                        }
                        className={styles.button}
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Number of languages */}
            <div className={styles.optionGroup}>
                <div className={styles.labelContainer}>
                    <label htmlFor="languages">Number of languages:</label>

                    {/* Tooltip */}
                    <button
                        className={styles.infoButton}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent event propagation to the parent container which would focus the input
                            showTooltip("languages");
                        }}
                        aria-label="Information about number of languages"
                    >
                        <span className={styles.infoIcon}>ⓘ</span>
                    </button>
                </div>
                <div className={styles.controlsContainer}>
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

            {/* Tooltip */}
            {tooltipState.isVisible && (
                <Tooltip
                    isVisible={tooltipState.isVisible}
                    title={
                        tooltipState.tooltipType === "pages"
                            ? "Number of Pages"
                            : "Number of Languages"
                    }
                    content={
                        tooltipState.tooltipType === "pages"
                            ? pagesContent
                            : languagesContent
                    }
                    onClose={hideTooltip}
                />
            )}
        </div>
    );
};

export default WebOptions;
