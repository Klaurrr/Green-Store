import plantsImg from "@/assets/plantsImg";

import { IPlants } from "@/types/IPlants";

import styles from "./Card.module.scss";

interface CardProps {
    plant: IPlants;
}

const Card = ({ plant }: CardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper_1}>
                <img src={plantsImg[`${plant.img}`].src} alt="plant-img" />
            </div>
            <div className={styles.wrapper_2}>
                <p>{plant.name}</p>
                <span>${plant.price}</span>
            </div>
        </div>
    );
};

export default Card;
