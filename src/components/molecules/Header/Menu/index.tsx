import icons from "@/assets/icons";
import Cart from "@/components/atoms/Header/Cart";
import LoginButton from "@/components/atoms/Header/LoginButton";
import styles from "./Menu.module.scss";

const Menu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.images}>
                <img src={icons.SearchIcon.src} alt="searchIcon-img" />
                <Cart />
            </div>
            <LoginButton />
        </div>
    );
};

export default Menu;
