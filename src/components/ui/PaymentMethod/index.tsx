import React, { FC } from "react";
import { IPaymentMethodProps } from "./PaymentMethod.props";
import clsx from "clsx";

import styles from "./PaymentMethod.module.scss";

const PaymentMethod: FC<IPaymentMethodProps> = ({ active, children }) => {
      return (
            <div className={clsx(styles.container, active && styles.active)}>
                  <div className={styles.circle}></div>
                  {children}
            </div>
      );
};

export default PaymentMethod;
