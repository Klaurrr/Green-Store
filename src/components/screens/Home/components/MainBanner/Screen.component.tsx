import plantsImg from "../../../../../../public/assets/plantsImg";
import Button from "@/components/ui/Button";

import styles from "./styles/Screen.module.scss";

const Screen = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.wrapper_1}>
                        <div className={styles.description_container}>
                              <h3 className={styles.title}>Welcome to GreenShop</h3>
                              <h1 className={styles.subtitle}>
                                    Let’s Make a Better <span>Planet</span>
                              </h1>
                              <p className={styles.description}>
                                    We are an online plant shop offering a wide range of cheap and
                                    trendy plants. Use our plants to create an unique Urban Jungle.
                                    Order your favorite plants!
                              </p>
                        </div>
                        <Button style={{ width: "140px", height: "40px", fontWeight: "700" }}>
                              SHOP NOW
                        </Button>
                  </div>
                  <div className={styles.wrapper_2}>
                        <img src={plantsImg.BigPlant.src} alt="BigPlant-img" />
                        <img src={plantsImg.SmallPlant.src} alt="SmallPlant-img" />
                  </div>
            </div>
      );
};

export default Screen;
