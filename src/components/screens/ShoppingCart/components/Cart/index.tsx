import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";

import PlantsSlider from "../../../../ui/PlantsSlider";

import { CartTotals, PlantsList } from "./components";

import styles from "./Cart.module.scss";

const Cart = () => {
      const { data: plants } = useQuery("allPlants", () =>
            fetch("https://green-store-beige.vercel.app/api/plants").then((res) => res.json())
      );

      return (
            <div className={styles.container}>
                  <div className={styles.wrapper}>
                        <PlantsList />
                        <CartTotals />
                  </div>
                  <div className={styles.wrapper_2}>
                        {plants ? (
                              <PlantsSlider title="You may be interested in" plants={plants} />
                        ) : (
                              <div className={styles.preloader}>
                                    <ClipLoader color="#46A358" />
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default Cart;
