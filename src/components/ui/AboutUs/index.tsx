import React from "react";

import plantsImg from "../../../../public/assets/plantsImg";

import Button from "../Button";

import icons from "../../../../public/assets/icons";

import styles from "@/styles/components/ui/AboutUs.module.scss";

const AboutUs = () => {
      return (
            <div className={styles.container}>
                  {["Arugula", "Monstera"].map((plant) => (
                        <div className={styles.wrapper}>
                              <img src={plantsImg[`${plant}`].src} alt="plant-img" />
                              <div className={styles.description}>
                                    <h3>Summer cactus & succulents</h3>
                                    <p>
                                          We are an online plant shop offering a wide range of cheap
                                          and trendy plants
                                    </p>
                                    <Button
                                          width={"140px"}
                                          height={"40px"}
                                          text={"Find More"}
                                          img={icons.ArrowRight.src}
                                    />
                              </div>
                        </div>
                  ))}
            </div>
      );
};

export default AboutUs;
