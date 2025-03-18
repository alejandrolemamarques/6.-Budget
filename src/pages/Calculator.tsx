import { useEffect, useState } from "react";
import styles from "./calculator.module.css";
import Checkbox from "../components/Checkbox";
import catalog from "../data/catalog.json";

const Calculator = () => {
    // capture the state of the checkboxes
    const [selectedServices, setSelectedServices] = useState<number[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        setTotalPrice(
            catalog.services
                .filter((service) => selectedServices.includes(service.id))
                .reduce((acc, service) => acc + service.price, 0)
        );
    }, [selectedServices]);

    // handle the change of the checkboxes
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
                        />
                    ))}
                </div>
                <div className={styles.totalContainer}>
                    <h2 className={styles.totalText}>
                        Preu pressuposat: {totalPrice}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
