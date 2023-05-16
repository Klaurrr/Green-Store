import { FC } from "react";

import { IProps } from "./Button.props";

import icons from "../../../../public/assets/icons";

import styles from "@/styles/components/ui/Button.module.scss";

const Button: FC<IProps> = ({ width, height, text, fontSize, fontWeight, handler }) => {
      const fontStyle = {
            alignItems: text === "Find More" ? "end" : "center",
            fontSize,
            fontWeight,
      };

      return (
            <button className={styles.button} style={{ width, height }} onClick={handler}>
                  <div style={fontStyle}>
                        {text === "Login" && (
                              <img
                                    src={icons.Logout.src}
                                    alt="logout-img"
                                    style={{ marginRight: "2px" }}
                              />
                        )}
                        {text}
                        {text === "Find More" && (
                              <img
                                    src={icons.ArrowRight.src}
                                    alt="arrow-img"
                                    style={{ marginLeft: "2px" }}
                              />
                        )}
                  </div>
            </button>
      );
};

export default Button;
