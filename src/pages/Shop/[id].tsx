import { FC } from "react";
import { useRouter } from "next/router";

import BreadCrumbs from "@/components/common/BreadCrumbs";
import PlantDetail from "@/components/ui/PlantDetail";

import Layout from "@/layout";

import { IPlants } from "@/types/IPlants";
import { IShopDetailProps } from "./props/ShopDetail.props";

const PlantDetailPage: FC<IShopDetailProps> = ({ plants }) => {
      const router = useRouter();

      const currentPlant =
            plants && plants.filter((plant: IPlants) => plant.id === Number(router.query.id));

      return (
            <Layout>
                  <BreadCrumbs />
                  <PlantDetail currentPlant={currentPlant} />
            </Layout>
      );
};

export const getServerSideProps = async () => {
      try {
            const response = await fetch("https://green-store-beige.vercel.app/api/plants");
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
