import React, { FC } from "react";

import { InputProps } from "./Input.props";

import styles from "./Input.module.scss";
import clsx from "clsx";

const Input: FC<InputProps> = React.forwardRef((props, ref) => {
      const { title = "", required, placeholder = "", error, ...rest } = props;

      return (
            <article className={styles.container}>
                  <h3 className={styles.title}>
                        {title}
                        {required && <span className={styles.required}>*</span>}
                  </h3>
                  <input
                        type="text"
                        className={clsx(styles.input, error && styles.error)}
                        placeholder={placeholder}
                        {...rest}
                  />
            </article>
      );
});

export default Input;
