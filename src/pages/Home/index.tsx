import React, { FC, useLayoutEffect } from "react";

import HomePage from "@/components/screens/Home";

import Layout from "@/layout";

import { usePlantsStore } from "@/store";

import { IPlantsState } from "@/types/IPlantsState";
import { IPageProps } from "@/types/IPage.props";

const Home: FC<IPageProps> = ({ plants }) => {
      const addPlants = usePlantsStore((state: IPlantsState) => state.addPlants);

      useLayoutEffect(() => {
            addPlants(plants);
      }, []);

      return (
            <Layout>
                  <HomePage />
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
