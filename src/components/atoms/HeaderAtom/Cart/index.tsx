import icons from "@/assets/icons";
import styles from "./Cart.module.scss";

const Cart = () => {
    return (
        <div className={styles.container}>
            <img src={icons.Cart.src} alt="Cart-img" />
            <div className={styles.counter}>5</div>
        </div>
    );
};

export default Cart;
