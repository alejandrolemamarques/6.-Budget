import styles from "./quoteCard.module.css";
import catalog from "../../data/catalog.json";
import "../../styles/variables.css";

interface QuoteCardProps {
    name: string;
    phone: string;
    email: string;
    services: number[];
    webPages?: number;
    webLanguages?: number;
    totalPrice: number;
}

export default function QuoteCard({
    name,
    phone,
    email,
    services,
    webPages,
    webLanguages,
    totalPrice,
}: QuoteCardProps) {
    // Get service names from catalog
    const getServiceDetails = () => {
        return services.map((serviceId) => {
            const service = catalog.services.find((s) => s.id === serviceId);
            if (serviceId === 3 && webPages && webLanguages) {
                // Web service
                return `Web (${webPages} pages, ${webLanguages} languages)`;
            }
            return service?.name || "";
        });
    };

    // Format the price with currency
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    // Truncate email for display if needed
    const formatEmail = (email: string) => {
        return email.length > 25 ? `${email.substring(0, 22)}...` : email;
    };

    return (
        <div className={styles.quoteCard}>
            <div className={styles.priceTag}>
                <span>{formatPrice(totalPrice)}</span>
            </div>

            <div className={styles.cardContent}>
                <div className={styles.customerInfo}>
                    <h2 className={styles.customerName} title={name}>
                        {name}
                    </h2>
                    <div className={styles.customerContact}>
                        <p className={styles.customerEmail} title={email}>
                            <span className={styles.icon}>✉️</span>{" "}
                            {formatEmail(email)}
                        </p>
                        <p className={styles.customerPhone} title={phone}>
                            <span className={styles.icon}>📱</span> {phone}
                        </p>
                    </div>
                </div>

                <div className={styles.servicesInfo}>
                    <h3 className={styles.servicesTitle}>Selected services:</h3>
                    <ul className={styles.servicesList}>
                        {getServiceDetails().map((service, index) => (
                            <li key={index} title={service}>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
