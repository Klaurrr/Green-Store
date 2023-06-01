import React, { FC, useLayoutEffect } from "react";

import MainBanner from "@/components/ui/MainBanner";
import Catalog from "@/components/ui/Catalog";
import AboutUs from "@/components/ui/AboutUs";
import Blog from "@/components/ui/Blog";

import Layout from "@/layout";

import { usePlantsStore } from "@/store";

import { IPlantsState } from "@/types/IPlantsState";
import { IHomeProps } from "./props/Home.props";

const Home: FC<IHomeProps> = ({ plants }) => {
      const addPlants = usePlantsStore((state: IPlantsState) => state.addPlants);

      useLayoutEffect(() => {
            localStorage.setItem("plants", JSON.stringify(plants));
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
