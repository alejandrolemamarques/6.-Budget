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
            <div className={styles.headerSection}>
                <h1 className={styles.title}>Web Services Calculator</h1>
                <p className={styles.subtitle}>
                    Select the services you need and customize your options to
                    get an instant quote
                </p>
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.infoSection}>
                    <div className={styles.infoCard}>
                        <h2>How it works</h2>
                        <ol className={styles.stepsList}>
                            <li>Select the services you're interested in</li>
                            <li>
                                Customize options for each service if available
                            </li>
                            <li>Get an instant price estimate</li>
                            <li>Contact us to finalize your quote</li>
                        </ol>
                    </div>

                    <div className={styles.infoCard}>
                        <h2>Why choose us</h2>
                        <ul className={styles.benefitsList}>
                            <li>Professional quality at competitive prices</li>
                            <li>Transparent pricing with no hidden fees</li>
                            <li>
                                Customized solutions for your specific needs
                            </li>
                            <li>Ongoing support after project completion</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.formContainer}>
                    <h2 className={styles.formTitle}>Select Your Services</h2>
                    <div className={styles.servicesContainer}>
                        {catalog.services.map((service) => (
                            <Checkbox
                                key={service.id}
                                data={service}
                                onChange={handleCheckboxChange}
                                isSelected={selectedServices.includes(
                                    service.id
                                )}
                            >
                                {service.id === WEB_SERVICE_ID &&
                                    selectedServices.includes(
                                        WEB_SERVICE_ID
                                    ) && (
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
                            Estimated price:{" "}
                            <span className={styles.totalPrice}>
                                {totalPrice}€
                            </span>
                        </h2>
                        {totalPrice > 0 && (
                            <button className={styles.requestQuoteBtn}>
                                Request detailed quote
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
