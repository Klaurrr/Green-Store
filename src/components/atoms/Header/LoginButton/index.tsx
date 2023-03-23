import icons from "@/assets/icons";
import styles from "./LoginButton.module.scss";

const LoginButton = () => {
    return (
        <button className={styles.button}>
            <img src={icons.Logout.src} alt="logout-img" />
            Login
        </button>
    );
};

export default LoginButton;
