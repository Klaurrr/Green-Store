import React from "react";

import Logo from "@/components/molecules/HeaderMolecule/Logo";
import NavBar from "@/components/molecules/HeaderMolecule/NavBar";
import Menu from "@/components/molecules/HeaderMolecule/Menu";

import styles from "./Header.module.scss";

const Header = React.memo(() => {
    return (
        <header className={styles.container}>
            <Logo />
            <NavBar />
            <Menu />
        </header>
    );
});

export default Header;
