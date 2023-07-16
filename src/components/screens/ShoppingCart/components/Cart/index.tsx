import { useQuery } from "react-query";
import { ClipLoader } from "react-spinners";

import PlantsSlider from "../../../../ui/PlantsSlider";

import CartTotals from "./CartTotals.component";
import PlantsList from "./PlantsList.component";

import styles from "./styles/Cart.module.scss";

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
                  {plants ? (
                        <PlantsSlider title="You may be interested in" plants={plants} />
                  ) : (
                        <div className={styles.preloader}>
                              <ClipLoader color="#46A358" />
                        </div>
                  )}
            </div>
      );
};

export default Cart;
