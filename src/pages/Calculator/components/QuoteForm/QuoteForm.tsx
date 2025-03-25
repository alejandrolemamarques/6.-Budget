import React, { useState } from "react";
import styles from "./quoteForm.module.css";
import { useCalculator } from "@/hooks/useCalculator";
import { QuoteFormData } from "@/types";

const QuoteForm: React.FC = () => {
    const { selectedServices, totalPrice, webPages, webLanguages, addQuote } =
        useCalculator();

    const [formData, setFormData] = useState<QuoteFormData>({
        name: "",
        phone: "",
        email: "",
    });

    // ... rest of the component code ...
};
