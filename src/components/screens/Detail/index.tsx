import BreadCrumbs from "@/components/common/BreadCrumbs";
import PlantsSlider from "@/components/ui/PlantsSlider";
import { IPlants } from "@/types/IPlants";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";

import { PlantDetail } from "./components/PlantDetail";

import styles from "./ShopDetail.module.scss";

const DetailPage = () => {
      const { query } = useRouter();

      const { data: allPlants } = useQuery("allPlants", () =>
            fetch("https://green-store-beige.vercel.app/api/plants").then((res) => res.json())
      );

      const currentPlant = allPlants?.filter((item: IPlants) => String(item.id) === query.id);

      return (
            <>
                  <BreadCrumbs />
                  {allPlants ? (
                        <>
                              <PlantDetail currentPlant={currentPlant} />
                              <PlantsSlider plants={allPlants} title="Releted Products" />
                        </>
                  ) : (
                        <div className={styles.preloader}>
                              <ClipLoader color="#46A358" />
                        </div>
                  )}
            </>
      );
};

export default DetailPage;
