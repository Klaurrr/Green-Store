import styles from "@/styles/components/common/Footer.module.scss";
import icons from "../../../../public/assets/icons";
import Button from "@/components/ui/Button";
import UpFooter from "./UpFooter.component";
import CenterFooter from "./CenterFooter.component";

const Footer = () => {
      return (
            <footer className={styles.container}>
                  <UpFooter />
                  <CenterFooter />
                  <div className={styles.wrapper_3}></div>
            </footer>
      );
};

export default Footer;
