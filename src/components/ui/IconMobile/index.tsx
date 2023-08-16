import { FC } from "react";
import clsx from "clsx";

import { IIconMobileProps } from "./IconMobile.props";

import styles from "./IconMobile.module.scss";

const IconMobile: FC<IIconMobileProps> = ({ children, active, style }) => {
      return (
            <div className={clsx(styles.container, active && styles.active)} style={style}>
                  {children}
            </div>
      );
};

export default IconMobile;
