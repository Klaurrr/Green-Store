import { FC } from "react";

import { IProps } from "./Button.props";

import icons from "../../../../public/assets/icons";

import styles from "@/styles/components/ui/Button.module.scss";

const Button: FC<IProps> = ({ width, height, text }) => {
      return (
            <button className={styles.button} style={{ width, height }}>
                  {text === "Login" && <img src={icons.Logout.src} alt="logout-img" />}
                  {text}
            </button>
      );
};

export default Button;
