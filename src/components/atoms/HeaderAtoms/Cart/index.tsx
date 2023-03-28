import { usePlantsStore } from "@/store";

import icons from "@/assets/icons";

import { IPlantsState } from "@/types/IPlantsState";

import styles from "./Cart.module.scss";

const Cart = () => {
    const plants = usePlantsStore((state: IPlantsState) => state?.cart);

    return (
        <div className={styles.container}>
            <img src={icons.Cart.src} alt="Cart-img" />
            <div className={styles.counter}>{plants.length}</div>
        </div>
    );
};

export default Cart;
