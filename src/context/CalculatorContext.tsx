import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
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
    const [searchParams, setSearchParams] = useSearchParams();

    // Initialize state from URL parameters
    const [selectedServices, setSelectedServices] = useState<number[]>(() => {
        const servicesParam = searchParams.get("services");
        return servicesParam ? servicesParam.split(",").map(Number) : [];
    });
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [webPages, setWebPages] = useState<number>(() => {
        const pagesParam = searchParams.get("pages");
        return pagesParam ? Number(pagesParam) : 1;
    });
    const [webLanguages, setWebLanguages] = useState<number>(() => {
        const languagesParam = searchParams.get("languages");
        return languagesParam ? Number(languagesParam) : 1;
    });
    const [paymentFrequency, setPaymentFrequency] = useState<PaymentFrequency>(
        () => {
            const frequencyParam = searchParams.get("frequency");
            return (frequencyParam as PaymentFrequency) || "monthly";
        }
    );
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

    // Update URL when state changes
    useEffect(() => {
        const params = new URLSearchParams();
        if (selectedServices.length > 0) {
            params.set("services", selectedServices.join(","));
        }
        if (webPages > 1) {
            params.set("pages", webPages.toString());
        }
        if (webLanguages > 1) {
            params.set("languages", webLanguages.toString());
        }
        if (paymentFrequency !== "monthly") {
            params.set("frequency", paymentFrequency);
        }
        setSearchParams(params);
    }, [
        selectedServices,
        webPages,
        webLanguages,
        paymentFrequency,
        setSearchParams,
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
