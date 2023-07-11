import icons from "../../../../public/assets/icons";
import Button from "@/components/ui/Button";
import { useState } from "react";

import styles from "./styles/UpFooter.module.scss";

const UpFooter = () => {
      const [value, setValue] = useState("");

      const handleClick = (e: MouseEvent) => {
            e.preventDefault();
            console.log(value);
      };

      return (
            <div className={styles.container}>
                  <div className={styles.info}>
                        <div>
                              <img src={icons.FooterIcon_1.src} alt="drawPlant-img" />
                              <h3>Garden Care</h3>
                              <p>
                                    We are an online plant shop offering a wide range of cheap and
                                    trendy plants.
                              </p>
                        </div>
                        <div>
                              <img src={icons.FooterIcon_2.src} alt="drawPlant-img" />
                              <h3>Plant Renovation</h3>
                              <p>
                                    We are an online plant shop offering a wide range of cheap and
                                    trendy plants.
                              </p>
                        </div>
                        <div>
                              <img src={icons.FooterIcon_3.src} alt="drawPlant-img" />
                              <h3>Watering Graden</h3>
                              <p>
                                    We are an online plant shop offering a wide range of cheap and
                                    trendy plants.
                              </p>
                        </div>
                  </div>
                  <form className={styles.form}>
                        <h3>Would you like to join newsletters?</h3>
                        <div>
                              <input
                                    type="text"
                                    placeholder="enter your email address..."
                                    onChange={(e) => setValue(e.target.value)}
                                    value={value}
                              />
                              <Button
                                    handler={handleClick}
                                    style={{
                                          width: "85px",
                                          height: "40px",
                                          fontWeight: "700",
                                          fontSize: "18px",
                                    }}
                              >
                                    Join
                              </Button>
                        </div>
                        <p>
                              We usually post offers and challenges in newsletter. We’re your online
                              houseplant destination. We offer a wide range of houseplants and
                              accessories shipped directly from our (green) house to yours!{" "}
                        </p>
                  </form>
            </div>
      );
};

export default UpFooter;
