import React, { useState } from "react";

import styles from "@/styles/components/ui/Checkbox.module.scss";
import clsx from "clsx";

const Checkbox = () => {
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
                  Ship to a different address?
            </div>
      );
};

export default Checkbox;
