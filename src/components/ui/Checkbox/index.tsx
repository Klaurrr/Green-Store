import React, { FC, useState } from "react";

import clsx from "clsx";

import { ICheckboxProps } from "./Checkbox.props";

import styles from "./Checkbox.module.scss";

const Checkbox: FC<ICheckboxProps> = ({ children }) => {
      const [checked, setChecked] = useState(false);

      return (
            <div className={styles.container}>
                  <label
                        htmlFor="checkbox"
                        className={clsx(styles.label, checked && styles.checked)}
                        onClick={() => setChecked(() => !checked)}
                  ></label>
                  <input
                        type="checkbox"
                        id="checkbox"
                        className={styles.checkbox}
                        onClick={() => console.log("checked")}
                  />
                  {children}
            </div>
      );
};

export default Checkbox;
