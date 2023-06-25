import { FC } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

import BreadCrumbs from "@/components/common/BreadCrumbs";
import PlantDetail from "@/components/ui/PlantDetail";
import PlantsSlider from "@/components/ui/PlantsSlider";

import Layout from "@/layout";

import { IPlants } from "@/types/IPlants";

import { ClipLoader } from "react-spinners";
import styles from "@/styles/components/ui/ShopDetail.module.scss";

const PlantDetailPage: FC = () => {
      const { query } = useRouter();

      const { data: allPlants } = useQuery("allPlants", () =>
            fetch("https://green-store-beige.vercel.app/api/plants").then((res) => res.json())
      );

      const currentPlant = allPlants?.filter((item: IPlants) => String(item.id) === query.id);

      return (
            <Layout>
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
            </Layout>
      );
};

export default PlantDetailPage;
