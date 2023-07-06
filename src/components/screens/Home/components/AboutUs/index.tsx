import React from "react";

import plantsImg from "../../../../../../public/assets/plantsImg";

import Button from "../../../../ui/Button";

import styles from "./AboutUs.module.scss";

export const AboutUs = () => {
      return (
            <div className={styles.container}>
                  {["Arugula", "Monstera"].map((plant, index) => (
                        <div className={styles.wrapper} key={`${plant}_${index}`}>
                              <img src={plantsImg[`${plant}`].src} alt="plant-img" />
                              <div className={styles.description}>
                                    <h3>Summer cactus & succulents</h3>
                                    <p>
                                          We are an online plant shop offering a wide range of cheap
                                          and trendy plants
                                    </p>
                                    <Button width={"140px"} height={"40px"} text={"Find More"} />
                              </div>
                        </div>
                  ))}
            </div>
      );
};
