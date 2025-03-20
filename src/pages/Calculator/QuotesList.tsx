import React from "react";
import styles from "./index.module.css";
import QuoteCard from "./QuoteCard";
import { useCalculator } from "../../hooks/useCalculator";

const QuotesList: React.FC = () => {
    const { quotes } = useCalculator();

    return (
        <div className={styles.quotesListContainer}>
            <div className={styles.quotesListHeader}>
                <h2 className={styles.pendingQuotesTitle}>Pending quotes</h2>
                <p className={styles.quotesCount}>
                    {quotes.length === 0
                        ? "No quotes yet"
                        : quotes.length === 1
                        ? "1 quote"
                        : `${quotes.length} quotes`}
                </p>
            </div>

            {quotes.length === 0 ? (
                <div className={styles.emptyQuotes}>
                    <div className={styles.emptyQuotesIcon}>📋</div>
                    <p>
                        No quotes yet! Fill out the form to create a new quote.
                    </p>
                </div>
            ) : (
                <div className={styles.quotesList}>
                    {quotes.map((quote, index) => (
                        <div
                            key={quote.id}
                            className={styles.quoteCardWrapper}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <QuoteCard {...quote} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default QuotesList;
