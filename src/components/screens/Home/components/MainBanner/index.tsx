import React from "react";

import Carousel from "@/components/common/Carousel";

import Screen from "./components/Screen";

import styles from "./MainBanner.module.scss";

export const MainBanner = () => {
      return (
            <section className={styles.container}>
                  <Carousel Banner>
                        <Screen />
                        <Screen />
                        <Screen />
                  </Carousel>
            </section>
      );
};
