import React from "react";

import GuestSlider from "@/components/organisms/GuestSlider";
import Layout from "@/components/templates/Layout";
import Catalog from "@/components/organisms/Catalog";

const Home = ({ plants }: any) => {
    console.log(plants);
    return (
        <Layout>
            <GuestSlider />
            <Catalog plants={plants} />
        </Layout>
    );
};

export const getStaticProps = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/plants");
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
