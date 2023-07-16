import { FC } from "react";

import plantsImg from "../../../../../../public/assets/plantsImg";

import { IPlantDetailProps } from "./props/PlantDetail.props";
import PlantDescription from "./PlantDescription.component";
import PlantInfo from "./PlantInfo.component";
import PlantSwitcher from "./PlantSwitcher.component";

import styles from "./styles/PlantDetail.module.scss";

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
