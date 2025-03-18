import { useEffect, useState } from "react";
import styles from "./calculator.module.css";
import Checkbox from "../components/Checkbox";
import WebOptions from "../components/WebOptions";
import catalog from "../data/catalog.json";

const Calculator = () => {
    const [selectedServices, setSelectedServices] = useState<number[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [webPages, setWebPages] = useState<number>(1);
    const [webLanguages, setWebLanguages] = useState<number>(1);

    const WEB_SERVICE_ID = 3;


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

    return (
        <div className={styles.calculatorContainer}>
            <h1 className={styles.title}>Aconsegueix la millor qualitat</h1>
            <div className={styles.formContainer}>
                <div className={styles.servicesContainer}>
                    {catalog.services.map((service) => (
                        <Checkbox
                            key={service.id}
                            data={service}
                            onChange={handleCheckboxChange}
                            isSelected={selectedServices.includes(service.id)}
                        >
                            {service.id === WEB_SERVICE_ID && (
                                <WebOptions
                                    pages={webPages}
                                    languages={webLanguages}
                                    onPagesChange={setWebPages}
                                    onLanguagesChange={setWebLanguages}
                                />
                            )}
                        </Checkbox>
                    ))}
                </div>
                <div className={styles.totalContainer}>
                    <h2 className={styles.totalText}>
                        Preu pressuposat:{" "}
                        <span className={styles.totalPrice}>{totalPrice}€</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
