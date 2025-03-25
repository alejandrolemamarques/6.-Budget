import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUp,
    faArrowDown,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

interface QuotesListFilterProps {
    searchQuery: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    sortField: "date" | "price" | "name" | null;
    sortDirection: "ascending" | "descending";
    onSort: (field: "date" | "price" | "name") => void;
}

const QuotesListFilter: React.FC<QuotesListFilterProps> = ({
    searchQuery,
    onSearchChange,
    sortField,
    sortDirection,
    onSort,
}) => {
    return (
        <div className={styles.quotesListFiltersContainer}>
            <div className={styles.quotesListFiltersItem}>
                <div className={styles.searchInputContainer}>
                    <FontAwesomeIcon
                        icon={faSearch}
                        className={styles.searchIcon}
                    />
                    <input
                        type="text"
                        placeholder="Search quotes..."
                        value={searchQuery}
                        onChange={onSearchChange}
                    />
                </div>
            </div>
            <div className={styles.quotesListFiltersItem}>
                <button
                    onClick={() => onSort("date")}
                    className={`${styles.sortButton} ${
                        sortField === "date" ? styles[sortDirection] : ""
                    }`}
                >
                    Date
                    {sortField === "date" && (
                        <FontAwesomeIcon
                            icon={
                                sortDirection === "ascending"
                                    ? faArrowUp
                                    : faArrowDown
                            }
                            className={styles.sortIcon}
                        />
                    )}
                </button>
            </div>
            <div className={styles.quotesListFiltersItem}>
                <button
                    onClick={() => onSort("price")}
                    className={`${styles.sortButton} ${
                        sortField === "price" ? styles[sortDirection] : ""
                    }`}
                >
                    Price
                    {sortField === "price" && (
                        <FontAwesomeIcon
                            icon={
                                sortDirection === "ascending"
                                    ? faArrowUp
                                    : faArrowDown
                            }
                            className={styles.sortIcon}
                        />
                    )}
                </button>
            </div>
            <div className={styles.quotesListFiltersItem}>
                <button
                    onClick={() => onSort("name")}
                    className={`${styles.sortButton} ${
                        sortField === "name" ? styles[sortDirection] : ""
                    }`}
                >
                    Name
                    {sortField === "name" && (
                        <FontAwesomeIcon
                            icon={
                                sortDirection === "ascending"
                                    ? faArrowUp
                                    : faArrowDown
                            }
                            className={styles.sortIcon}
                        />
                    )}
                </button>
            </div>
        </div>
    );
};

export default QuotesListFilter;
