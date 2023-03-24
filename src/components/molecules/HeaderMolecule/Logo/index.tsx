import LogoImage from "@/components/atoms/HeaderAtom/LogoImage";
import LogoTitle from "@/components/atoms/HeaderAtom/LogoTitle";

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
