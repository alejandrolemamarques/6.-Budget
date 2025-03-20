import { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext";

// Custom hook for using calculator context
export const useCalculator = () => {
    const context = useContext(CalculatorContext);
    if (context === undefined) {
        throw new Error(
            "useCalculator must be used within a CalculatorProvider"
        );
    }
    return context;
};
