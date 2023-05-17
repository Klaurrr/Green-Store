import styles from "@/styles/components/common/Footer.module.scss";
import icons from "../../../../public/assets/icons";
import Button from "@/components/ui/Button";
import UpFooter from "./UpFooter.component";
import CenterFooter from "./CenterFooter.component";
import DownFooter from "./DownFooter.component";

const Footer = () => {
      return (
            <footer className={styles.container}>
                  <UpFooter />
                  <CenterFooter />
                  <DownFooter />
                  <p className={styles.signature}>
                        © 2023 GreenShop. All Rights Reserved. UsachevDev.
                  </p>
            </footer>
      );
};

export default Footer;
