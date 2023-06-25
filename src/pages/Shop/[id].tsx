import { FC } from "react";

import BreadCrumbs from "@/components/common/BreadCrumbs";
import PlantDetail from "@/components/ui/PlantDetail";
import PlantsSlider from "@/components/ui/PlantsSlider";

import Layout from "@/layout";

import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { IPlants } from "@/types/IPlants";

const PlantDetailPage: FC = () => {
      const { query } = useRouter();

      const { data: allPlants } = useQuery("allPlants", () =>
            fetch("https://green-store-beige.vercel.app/api/plants").then((res) => res.json())
      );

      const currentPlant = allPlants?.filter((item: IPlants) => String(item.id) === query.id);

      return (
            <Layout>
                  <BreadCrumbs />
                  {currentPlant ? <PlantDetail currentPlant={currentPlant} /> : <h1>Loading...</h1>}
                  {allPlants ? (
                        <PlantsSlider plants={allPlants} title="Releted Products" />
                  ) : (
                        <h1>Loading...</h1>
                  )}
            </Layout>
      );
};

// export async function getStaticPaths() {
//       const paths = [];
//       for (let i = 1; i <= 16; i++) {
//             const currentObject = { params: { id: `${i}` } };
//             paths.push(currentObject);
//       }
//       return {
//             paths,
//             fallback: false,
//       };
// }

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//       const { id } = context.params as IContextParams;
//       try {
//             const currentPlantResponse = await fetch(
//                   `https://green-store-beige.vercel.app/api/plants/${id}`
//             );
//             const plants = await currentPlantResponse.json();

//             const allPlantsResponse = await fetch(
//                   "https://green-store-beige.vercel.app/api/plants"
//             );

//             const allPlants = await allPlantsResponse.json();

//             return {
//                   props: {
//                         plants,
//                         allPlants,
//                   },
//             };
//       } catch (err) {
//             console.log("Ошибка, ", err);
//             return {
//                   props: {},
//             };
//       }
// };

export default PlantDetailPage;
