import { FC } from "react";
import { useRouter } from "next/router";

import BreadCrumbs from "@/components/common/BreadCrumbs";
import PlantDetail from "@/components/ui/PlantDetail";
import PlantsSlider from "@/components/ui/PlantsSlider";

import Layout from "@/layout";

import { IPlants } from "@/types/IPlants";
import { IpageProps } from "@/types/IPage.props";

const PlantDetailPage: FC<IpageProps> = ({ plants }) => {
      const router = useRouter();

      const currentPlant =
            plants && plants.filter((plant: IPlants) => plant.id === Number(router.query.id));

      return (
            <Layout>
                  <BreadCrumbs />
                  <PlantDetail currentPlant={currentPlant} />
                  <PlantsSlider plants={plants} title="Releted Products" />
            </Layout>
      );
};

export async function getStaticPaths() {
      const paths = [];

      for (let i = 1; i <= 16; i++) {
            const currentObject = { params: { id: `${i}` } };
            paths.push(currentObject);
      }

      return {
            paths,
            fallback: false,
      };
}

export const getStaticProps = async () => {
      try {
            const response = await fetch(`https://green-store-beige.vercel.app/api/plants`);
            const plants = await response.json();

            return {
                  props: {
                        plants,
                  },
            };
      } catch (err) {
            console.log("Ошибка, ", err);
            return {
                  props: {},
            };
      }
};

export default PlantDetailPage;
