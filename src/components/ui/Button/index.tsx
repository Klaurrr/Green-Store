import { FC } from "react";

import { IProps } from "./Button.props";

import icons from "../../../../public/assets/icons";

import clsx from "clsx";

import styles from "./Button.module.scss";

const Button: FC<IProps> = ({ children, handler, invert, type, style }) => {
      const fontStyle = {
            alignItems: children === "Find More" ? "end" : "center",
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
      };

      return (
            <button
                  className={invert ? clsx(styles.button, styles.invert) : styles.button}
                  style={style}
                  onClick={handler}
                  type={type}
            >
                  <div style={fontStyle}>
                        {children === "Login" && (
                              <img
                                    src={icons.Logout.src}
                                    alt="logout-img"
                                    style={{ marginRight: "2px" }}
                              />
                        )}
                        {children}
                        {children === "Find More" && (
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
