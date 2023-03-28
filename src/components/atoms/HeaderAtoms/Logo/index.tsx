import icons from "@/assets/icons";
import styles from "./Logo.module.scss";

const Logo = () => {
    return (
        <>
            <img src={icons.Logo.src} alt="logo-img" />
            <h1 className={styles.title}>GREENSHOP</h1>
        </>
    );
};

export default Logo;
