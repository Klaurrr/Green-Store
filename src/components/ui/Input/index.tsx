import React, { FC } from "react";
import clsx from "clsx";

import { InputProps } from "./Input.props";

import styles from "./Input.module.scss";

const Input: FC<InputProps> = React.forwardRef((props, ref) => {
      const { title = "", required, placeholder = "", error, style, ...rest } = props;

      return (
            <article className={styles.container}>
                  {title && (
                        <h3 className={styles.title}>
                              {title}
                              {required && <span className={styles.required}>*</span>}
                        </h3>
                  )}
                  <input
                        type="text"
                        className={clsx(styles.input, error && styles.error)}
                        placeholder={placeholder}
                        style={style}
                        autoComplete="off"
                        {...rest}
                  />
            </article>
      );
});

export default Input;
