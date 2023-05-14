import React, { useLayoutEffect } from "react";

import { usePlantsStore } from "@/store";
import { IPlants } from "@/types/IPlants";
import { IPlantsState } from "@/types/IPlantsState";
import Layout from "@/layout";
import MainBanner from "@/components/ui/MainBanner";
import Catalog from "@/components/ui/Catalog";
import AboutUs from "@/components/ui/AboutUs";
import Blog from "@/components/ui/Blog";

const Home = ({ plants }: { plants: IPlants[] }) => {
      const addPlants = usePlantsStore((state: IPlantsState) => state.addPlants);

      useLayoutEffect(() => {
            addPlants(plants);
      }, []);

      return (
            <Layout>
                  <MainBanner />
                  <Catalog />
                  <AboutUs />
                  <Blog />
            </Layout>
      );
};

export const getStaticProps = async () => {
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

export default Home;
