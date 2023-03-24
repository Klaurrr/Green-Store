import icons from "@/assets/icons";
import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    [key: string]: string;
}

const Button: FC<ButtonProps> = ({ width, height, text }) => {
    return (
        <button className={styles.button} style={{ width, height }}>
            {text === "Login" && (
                <img src={icons.Logout.src} alt="logout-img" />
            )}
            {text}
        </button>
    );
};

export default Button;
