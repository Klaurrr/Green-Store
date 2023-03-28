import icons from "@/assets/icons";
import Cart from "@/components/atoms/HeaderAtoms/Cart";
import Button from "@/components/atoms/ButtonAtom";
import styles from "./Menu.module.scss";

const Menu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.images}>
                <img src={icons.SearchIcon.src} alt="searchIcon-img" />
                <Cart />
            </div>
            <Button width={"100px"} height={"35px"} text={"Login"} />
        </div>
    );
};

export default Menu;
