import React, { useState } from "react";
import styles from "./styles.module.css";
import QuoteCard from "./components/QuoteCard";
import QuotesListFilter from "./components/QuotesListFilter";
import { useCalculator } from "@/hooks/useCalculator";

const QuotesList: React.FC = () => {
    const { quotes } = useCalculator();
    const [sortField, setSortField] = useState<
        "date" | "price" | "name" | null
    >(null);
    const [sortDirection, setSortDirection] = useState<
        "ascending" | "descending"
    >("descending");
    const [searchQuery, setSearchQuery] = useState("");

    const handleSort = (field: "date" | "price" | "name") => {
        if (sortField === field) {
            setSortDirection(
                sortDirection === "ascending" ? "descending" : "ascending"
            );
        } else {
            setSortField(field);
            setSortDirection("descending");
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredQuotes = quotes.filter(
        (quote) =>
            quote.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            quote.date.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedQuotes = [...filteredQuotes].sort((a, b) => {
        if (!sortField) return 0;

        const multiplier = sortDirection === "ascending" ? 1 : -1;

        switch (sortField) {
            case "date":
                return (
                    multiplier *
                    (new Date(a.date).getTime() - new Date(b.date).getTime())
                );
            case "price":
                return multiplier * (a.totalPrice - b.totalPrice);
            case "name":
                return multiplier * a.name.localeCompare(b.name);
            default:
                return 0;
        }
    });

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

            {/* Filters */}
            {quotes.length > 0 && (
                <QuotesListFilter
                    searchQuery={searchQuery}
                    onSearchChange={handleSearch}
                    sortField={sortField}
                    sortDirection={sortDirection}
                    onSort={handleSort}
                />
            )}

            {quotes.length === 0 ? (
                <div className={styles.emptyQuotes}>
                    <div className={styles.emptyQuotesIcon}>📋</div>
                    <p>
                        No quotes yet! Fill out the form to create a new quote.
                    </p>
                </div>
            ) : filteredQuotes.length === 0 ? (
                <div className={styles.emptyQuotes}>
                    <div className={styles.emptyQuotesIcon}>🔍</div>
                    <p>No quotes found matching your search criteria.</p>
                </div>
            ) : (
                <div className={styles.quotesList}>
                    {sortedQuotes.map((quote, index) => (
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
