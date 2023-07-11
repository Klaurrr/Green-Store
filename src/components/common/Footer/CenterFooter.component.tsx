import Logo from "@/components/ui/Logo";
import icons from "../../../../public/assets/icons";

import styles from "./styles/CenterFooter.module.scss";

const CenterFooter = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.wrapper}>
                        <Logo />
                        <div>
                              <img src={icons.Location.src} alt="location-img" />
                              <p>
                                    70 West Buckingham Ave. <br /> Farmingdale, NY 11735
                              </p>
                        </div>
                        <div>
                              <img src={icons.Message.src} alt="Message-img" />
                              <p>contact@greenshop.com</p>
                        </div>
                        <div>
                              <img src={icons.Calling.src} alt="Calling-img" />
                              <p>+88 01911 717 490</p>
                        </div>
                  </div>
            </div>
      );
};

export default CenterFooter;
