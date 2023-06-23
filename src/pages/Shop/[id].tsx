import { FC } from "react";
import { GetStaticPropsContext } from "next";

import BreadCrumbs from "@/components/common/BreadCrumbs";
import PlantDetail from "@/components/ui/PlantDetail";
import PlantsSlider from "@/components/ui/PlantsSlider";

import Layout from "@/layout";

import { IPageProps } from "@/types/IPage.props";
import { IContextParams } from "@/types/IContextParams";

const PlantDetailPage: FC<IPageProps> = ({ plants: plant, allPlants }) => {
      return (
            <Layout>
                  <BreadCrumbs />
                  <PlantDetail currentPlant={plant} />
                  <PlantsSlider plants={allPlants} title="Releted Products" />
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

export const getStaticProps = async (context: GetStaticPropsContext) => {
      const { id } = context.params as IContextParams;
      try {
            const currentPlantResponse = await fetch(
                  `https://green-store-beige.vercel.app/api/plants/${id}`
            );
            const plants = await currentPlantResponse.json();

            const allPlantsResponse = await fetch("http://localhost:3000/api/plants");

            const allPlants = await allPlantsResponse.json();

            return {
                  props: {
                        plants,
                        allPlants,
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
