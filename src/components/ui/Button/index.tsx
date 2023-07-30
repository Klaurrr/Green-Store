import { FC } from "react";
import clsx from "clsx";

import { IProps } from "./Button.props";

import styles from "./Button.module.scss";

const Button: FC<IProps> = ({ children, handler, invert, type, style }) => {
      const fontStyle = {
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
                  <div style={fontStyle}>{children}</div>
            </button>
      );
};

export default Button;
