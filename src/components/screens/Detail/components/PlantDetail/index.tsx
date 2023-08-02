import { FC } from "react";

import plantsImg from "../../../../../../public/assets/plantsImg";

import { PlantDescription, PlantInfo, PlantSwitcher } from "./components";
import { IPlantDetailProps } from "./PlantDetail.props";

import styles from "./PlantDetail.module.scss";

export const PlantDetail: FC<IPlantDetailProps> = ({ currentPlant }) => {
      const MOCK_IMAGES = Array(4).fill(plantsImg[currentPlant[0]?.img]?.src);

      return (
            <main className={styles.container}>
                  <div className={styles.wrapper}>
                        <PlantSwitcher images={MOCK_IMAGES} />
                        <PlantInfo currentPlant={currentPlant} />
                  </div>

                  <PlantDescription currentPlant={currentPlant} />
            </main>
      );
};
