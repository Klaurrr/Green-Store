import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";

import PlantsSlider from "../../../../ui/PlantsSlider";

import { CartTotals, PlantsList } from "./components";

import styles from "./Cart.module.scss";

const Cart = () => {
      const { data: plants, isLoading } = useQuery("allPlants", () =>
            fetch(process.env.PLANTS_URL!).then((res) => res.json())
      );

      return (
            <div className={styles.container}>
                  <div className={styles.wrapper}>
                        <PlantsList />
                        <CartTotals />
                  </div>
                  <div className={styles.wrapper_2}>
                        {isLoading ? (
                              <div className={styles.preloader}>
                                    <ClipLoader color="#46A358" />
                              </div>
                        ) : plants ? (
                              <PlantsSlider title="You may be interested in" plants={plants} />
                        ) : (
                              <h1>Слайдер сломался...</h1>
                        )}
                  </div>
            </div>
      );
};

export default Cart;
