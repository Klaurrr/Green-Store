import React from "react";

import Carousel from "@/components/common/Carousel";
import Screen from "./Screen.component";

import styles from "@/styles/components/ui/MainBanner.module.scss";

const MainBanner = () => {
      return (
            <section className={styles.container}>
                  <Carousel>
                        <Screen />
                        <Screen />
                        <Screen />
                  </Carousel>
            </section>
      );
};

export default MainBanner;
