import Logo from "@/components/atoms/HeaderAtoms/Logo";
import Menu from "@/components/atoms/HeaderAtoms/Menu";
import NavBar from "@/components/atoms/HeaderAtoms/NavBar";

import styles from "./HeaderMolecule.module.scss";

const HeaderMolecule = () => {
    return (
        <>
            <div className={styles.logo}>
                <Logo />
            </div>
            <NavBar />
            <Menu />
        </>
    );
};

export default HeaderMolecule;
