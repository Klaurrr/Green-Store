import PlantsList from "./PlantsList.component";
import CartTotals from "./CartTotals.component";

import styles from "@/styles/components/ui/Cart.module.scss";

const Cart = () => {
      return (
            <div className={styles.container}>
                  <PlantsList />
                  <CartTotals />
            </div>
      );
};

export default Cart;
