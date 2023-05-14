import { FC } from "react";

import { IProps } from "./Button.props";

import icons from "../../../../public/assets/icons";

import styles from "@/styles/components/ui/Button.module.scss";

const Button: FC<IProps> = ({ width, height, text }) => {
      return (
            <button className={styles.button} style={{ width, height }}>
                  <div style={{ alignItems: text === "Find More" ? "end" : "center" }}>
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
