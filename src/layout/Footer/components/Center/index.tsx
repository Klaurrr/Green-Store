import Logo from "@/components/ui/Logo";

import icons from "../../../../../public/assets/icons";

import styles from "./CenterFooter.module.scss";

export const CenterFooter = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.wrapper}>
                        <Logo />
                        <div>
                              <img src={icons.Location.src} alt="location-img" />
                              <p>
                                    Nizhny Novgorod <br /> Russia
                              </p>
                        </div>
                        <div>
                              <img src={icons.Message.src} alt="Message-img" />
                              <a href="mailto:UsachevDev@yandex.ru">UsachevDev@yandex.ru</a>
                        </div>
                        <div>
                              <img src={icons.Calling.src} alt="Calling-img" />
                              <a href="tel:+79040455531">+7 904 04 555 31</a>
                        </div>
                  </div>
            </div>
      );
};
