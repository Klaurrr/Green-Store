import React, { useLayoutEffect } from "react";

import MainSlider from "@/components/organisms/MainSlider";
import Layout from "@/components/templates/Layout";
import Catalog from "@/components/organisms/Catalog";
import { usePlantsStore } from "@/store";
import { IPlants } from "@/types/IPlants";
import { IPlantsState } from "@/types/IPlantsState";

const Home = ({ plants }: { plants: IPlants[] }) => {
    const addPlants = usePlantsStore((state: IPlantsState) => state.addPlants);

    useLayoutEffect(() => {
        addPlants(plants);
    }, []);

    return (
        <Layout>
            <MainSlider />
            <Catalog />
        </Layout>
    );
};

export const getStaticProps = async () => {
    try {
        const response = await fetch(
            "https://green-store-beige.vercel.app/api/plants"
            // "http://localhost:3000/api/plants"
        );
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
