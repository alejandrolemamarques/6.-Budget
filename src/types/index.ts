// Service Types
export interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
}

// Quote Types
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
    paymentFrequency: PaymentFrequency;
}

// Calculator Context Types
export interface CalculatorContextType {
    // State
    selectedServices: number[];
    totalPrice: number;
    webPages: number;
    webLanguages: number;
    quotes: QuoteCardProps[];
    paymentFrequency: PaymentFrequency;
    setSelectedServices: (services: number[]) => void;

    // Actions
    handleCheckboxChange: (serviceId: number, isChecked: boolean) => void;
    setWebPages: (pages: number) => void;
    setWebLanguages: (languages: number) => void;
    addQuote: (quote: QuoteCardProps) => void;
    deleteQuote: (id: string) => void;
    setPaymentFrequency: (frequency: PaymentFrequency) => void;
}

// Component Props Types
export interface CheckboxProps {
    data: Service;
    isSelected: boolean;
    children?: React.ReactNode;
}

export interface TooltipProps {
    isVisible: boolean;
    title: string;
    content: React.ReactNode;
    onClose: () => void;
}

export interface TooltipState {
    isVisible: boolean;
    tooltipType: "pages" | "languages" | null;
}

// Form Types
export interface QuoteFormData {
    name: string;
    phone: string;
    email: string;
}

// Payment Types
export type PaymentFrequency = "monthly" | "yearly";
