import React, { createContext, useState, useEffect, ReactNode } from "react";
import catalog from "../data/catalog.json";

// Define types
export interface QuoteCardProps {
    id?: string;
    name: string;
    phone: string;
    email: string;
    services: number[];
    webPages?: number;
    webLanguages?: number;
    totalPrice: number;
    date: string;
}

interface CalculatorContextType {
    // State
    selectedServices: number[];
    totalPrice: number;
    webPages: number;
    webLanguages: number;
    quotes: QuoteCardProps[];
    setSelectedServices: (services: number[]) => void;

    // Actions
    handleCheckboxChange: (serviceId: number, isChecked: boolean) => void;
    setWebPages: (pages: number) => void;
    setWebLanguages: (languages: number) => void;
    addQuote: (quote: QuoteCardProps) => void;
    deleteQuote: (id: string) => void;
}

// Create context with a default value
export const CalculatorContext = createContext<
    CalculatorContextType | undefined
>(undefined);

// Export the context type for use in the hook
export type { CalculatorContextType };

// Constant for the web service ID
const WEB_SERVICE_ID = 3;

// Provider component
export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [selectedServices, setSelectedServices] = useState<number[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [webPages, setWebPages] = useState<number>(1);
    const [webLanguages, setWebLanguages] = useState<number>(1);
    const [quotes, setQuotes] = useState<QuoteCardProps[]>([
        {
            id: "1",
            name: "John Doe",
            phone: "1234567890",
            email: "john.doe@example.com",
            services: [1, 2, 3],
            webPages: 1,
            webLanguages: 1,
            totalPrice: 100,
            date: "2023-11-15T14:30:00.000Z",
        },
    ]);

    // Calculate the total price
    useEffect(() => {
        const calculatedPrice = catalog.services
            .filter((service) => selectedServices.includes(service.id))
            .reduce((acc, service) => {
                if (service.id === WEB_SERVICE_ID) {
                    // Base price + additional costs for pages and languages
                    return (
                        acc +
                        service.price +
                        (webPages - 1) * 30 +
                        (webLanguages - 1) * 30
                    );
                }
                return acc + service.price;
            }, 0);

        setTotalPrice(calculatedPrice);
    }, [selectedServices, webPages, webLanguages]);

    const handleCheckboxChange = (serviceId: number, isChecked: boolean) => {
        if (isChecked) {
            setSelectedServices([...selectedServices, serviceId]);
        } else {
            setSelectedServices(
                selectedServices.filter((id) => id !== serviceId)
            );
        }
    };

    const addQuote = (quote: Omit<QuoteCardProps, "id">) => {
        const newQuote = {
            ...quote,
            id: Date.now().toString(),
        };
        setQuotes([...quotes, newQuote]);
    };

    const deleteQuote = (id: string) => {
        setQuotes(quotes.filter((quote) => quote.id !== id));
    };

    const contextValue: CalculatorContextType = {
        // State
        selectedServices,
        totalPrice,
        webPages,
        webLanguages,
        quotes,

        // Actions
        handleCheckboxChange,
        setWebPages,
        setWebLanguages,
        addQuote,
        setSelectedServices,
        deleteQuote,
    };

    return (
        <CalculatorContext.Provider value={contextValue}>
            {children}
        </CalculatorContext.Provider>
    );
};
