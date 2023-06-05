import { FC } from "react";

import PlantInfo from "./PlantInfo.component";
import PlantSwitcher from "./PlantSwitcher.component";
import PlantDescription from "./PlantDescription.component";
import PlantsSlider from "../PlantsSlider";

import plantsImg from "../../../../public/assets/plantsImg";

import { IPlantDetailProps } from "./props/PlantDetail.props";

import styles from "@/styles/components/ui/PlantDetail.module.scss";

const PlantDetail: FC<IPlantDetailProps> = ({ currentPlant }) => {
      const mock_images = Array(4).fill(plantsImg[currentPlant[0]?.img]?.src);

      return (
            <main className={styles.container}>
                  <div className={styles.wrapper}>
                        <PlantSwitcher images={mock_images} />
                        <PlantInfo currentPlant={currentPlant} />
                  </div>
                  <PlantDescription currentPlant={currentPlant} />
            </main>
      );
};

export default PlantDetail;
