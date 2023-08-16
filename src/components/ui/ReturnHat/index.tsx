import { FC } from "react";
import { useRouter } from "next/router";

import ArrowLeft from "../../../../public/assets/svg/ArrowLeft.svg";
import IconMobile from "../IconMobile";

import { IReturnHatProps } from "./ReturnHat.props";

import styles from "./RerurnHat.module.scss";

const ReturnHat: FC<IReturnHatProps> = ({ title }) => {
      const { push } = useRouter();

      return (
            <div className={styles.header}>
                  <IconMobile
                        style={{
                              minWidth: "48px",
                              height: "48px",
                              background: "#F6F6F6",
                        }}>
                        <ArrowLeft onClick={() => push("/Home")} />
                  </IconMobile>
                  <div className={styles.title}>
                        <h1>{title}</h1>
                  </div>
            </div>
      );
};

export default ReturnHat;
