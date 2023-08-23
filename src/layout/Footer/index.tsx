import { Center, Down, Up } from "./components";

import styles from "./Footer.module.scss";

const Footer = () => {
      return (
            <>
                  <footer className={styles.container}>
                        <Up />
                        <Center />
                        <Down />
                        <p className={styles.signature}>
                              © 2023 GreenShop. All Rights Reserved. UsachevDev.
                        </p>
                  </footer>
            </>
      );
};

export default Footer;
