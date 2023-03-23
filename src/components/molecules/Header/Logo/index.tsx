import LogoImage from "@/components/atoms/Header/LogoImage";
import LogoTitle from "@/components/atoms/Header/LogoTitle";

import styles from "./Logo.module.scss";

const Logo = () => {
    return (
        <div className={styles.container}>
            <LogoImage />
            <LogoTitle />
        </div>
    );
};

export default Logo;
