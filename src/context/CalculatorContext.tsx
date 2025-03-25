import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
    CalculatorContextType,
    QuoteCardProps,
    PaymentFrequency,
} from "@/types";
import catalog from "../data/catalog.json";

// Create context with a default value
export const CalculatorContext = createContext<
    CalculatorContextType | undefined
>(undefined);

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
    const [paymentFrequency, setPaymentFrequency] =
        useState<PaymentFrequency>("monthly");
    const [quotes, setQuotes] = useState<QuoteCardProps[]>([
        {
            id: "1",
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "1234567890",
            date: "2021-01-01",
            services: [1, 3],
            totalPrice: 800,
            webPages: 1,
            webLanguages: 1,
            paymentFrequency: "monthly",
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

        // Apply 20% discount for yearly payments
        const finalPrice =
            paymentFrequency === "yearly"
                ? calculatedPrice * 0.8
                : calculatedPrice;

        setTotalPrice(finalPrice);
    }, [selectedServices, webPages, webLanguages, paymentFrequency]);

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
        paymentFrequency,

        // Actions
        handleCheckboxChange,
        setWebPages,
        setWebLanguages,
        addQuote,
        setSelectedServices,
        deleteQuote,
        setPaymentFrequency,
    };

    return (
        <CalculatorContext.Provider value={contextValue}>
            {children}
        </CalculatorContext.Provider>
    );
};
