import React, { FC } from "react";

import { InputProps } from "./Input.props";

import styles from "@/styles/components/ui/Input.module.scss";

const Input: FC<InputProps> = ({ title = "", required, placeholder = "" }) => {
      return (
            <article className={styles.container}>
                  <h3 className={styles.title}>
                        {title}
                        {required && <span className={styles.required}>*</span>}
                  </h3>
                  <input type="text" className={styles.input} placeholder={placeholder} />
            </article>
      );
};

export default Input;
