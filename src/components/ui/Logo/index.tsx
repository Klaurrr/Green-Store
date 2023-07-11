import icons from "../../../../public/assets/icons";

import styles from "./Logo.module.scss";

const Logo = () => {
      return (
            <div className={styles.logo}>
                  <img src={icons.Logo.src} alt="logo-img" />
                  <h1 className={styles.title}>GREENSHOP</h1>
            </div>
      );
};

export default Logo;
