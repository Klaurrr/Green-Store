import { useRouter } from "next/router";

import useWindowSize from "@/hooks/UseWindowSize";

import CenterFooter from "./CenterFooter.component";
import DownFooter from "./DownFooter.component";
import UpFooter from "./UpFooter.component";

import styles from "./styles/Footer.module.scss";

const Footer = () => {
      const isSmallScreen = useWindowSize();

      const { pathname } = useRouter();

      return (
            <>
                  <footer className={styles.container}>
                        <UpFooter />
                        <CenterFooter />
                        <DownFooter />
                        <p className={styles.signature}>
                              © 2023 GreenShop. All Rights Reserved. UsachevDev.
                        </p>
                  </footer>
            </>
      );
};

export default Footer;
