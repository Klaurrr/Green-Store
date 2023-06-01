import { FC } from "react";

import PlantSlider from "./PlantSlider.component";

import plantsImg from "../../../../public/assets/plantsImg";

import { IPlantDetailProps } from "./props/PlantDetail.props";

import styles from "@/styles/components/ui/PlantDetail.module.scss";
import PlantInfo from "./PlantInfo.component";

const PlantDetail: FC<IPlantDetailProps> = ({ currentPlant }) => {
      const mock_images = Array(4).fill(plantsImg[currentPlant[0]?.img]?.src);

      return (
            <main className={styles.container}>
                  <PlantSlider images={mock_images} />
                  <PlantInfo currentPlant={currentPlant} />
            </main>
      );
};

export default PlantDetail;
