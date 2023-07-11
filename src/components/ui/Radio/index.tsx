import React, { useState } from "react";

import styles from "./Radio.module.scss";
import clsx from "clsx";

const Radio = () => {
      //   const [enabled, setEnabled] = useState(false);

      return (
            <>
                  <input
                        type="radio"
                        className={styles.radio}
                        name="radio"
                        // checked={enabled}
                        id="radio"
                  />

                  <label
                        htmlFor="radio"
                        className={clsx(styles.label, styles.checked)}
                        // onClick={() => setEnabled(true)}
                  ></label>
            </>
      );
};

export default Radio;
