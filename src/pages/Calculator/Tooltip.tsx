import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./tooltip.module.css";

interface TooltipProps {
    isVisible: boolean;
    title: string;
    content: ReactNode;
    onClose: () => void;
}

const Tooltip: React.FC<TooltipProps> = ({
    isVisible,
    title,
    content,
    onClose,
}) => {
    if (!isVisible) return null;

    // Use createPortal to render the tooltip directly to the document body
    return createPortal(
        <div className={styles.tooltip} onClick={onClose}>
            <div
                className={styles.tooltipContent}
                onClick={(e) => e.stopPropagation()}
            >
                <h4>{title}</h4>
                {content}
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Close tooltip"
                >
                    ✕
                </button>
            </div>
        </div>,
        document.body
    );
};

export default Tooltip;
