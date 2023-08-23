import { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/router";

import BreadCrumbs from "@/components/common/BreadCrumbs";
import ErrorBanner from "@/components/ui/ErrorBanner";
import PlantsSlider from "@/components/ui/PlantsSlider";
import useWindowSize from "@/hooks/UseWindowSize";
import { IPlants } from "@/types/IPlants";

import { PlantDetail } from "./components/PlantDetail";

import styles from "./ShopDetail.module.scss";

const DetailPage = () => {
      const { query } = useRouter();

      const { data: allPlants, isLoading } = useQuery("allPlants", () =>
            fetch(process.env.PLANTS_URL!).then((res) => res.json())
      );

      const currentPlant = allPlants?.filter((item: IPlants) => String(item.id) === query.id);

      const currentRef = useRef<HTMLDivElement | null>(null);

      const isSmallScreen = useWindowSize();

      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);

      return (
            <div ref={currentRef}>
                  <BreadCrumbs />
                  {isLoading ? (
                        <div className={styles.preloader}>
                              <ClipLoader color="#46A358" />
                        </div>
                  ) : allPlants ? (
                        <>
                              <PlantDetail currentPlant={currentPlant[0]} />
                              {!isSmallScreen && (
                                    <PlantsSlider plants={allPlants} title="Releted Products" />
                              )}
                        </>
                  ) : (
                        <ErrorBanner />
                  )}
            </div>
      );
};

export default DetailPage;
