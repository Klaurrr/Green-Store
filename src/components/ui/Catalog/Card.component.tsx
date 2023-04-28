import plantsImg from "../../../../public/assets/plantsImg";

import { CardProps } from "./props/Card.props";

import styles from "@/styles/components/ui/Card.module.scss";

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
