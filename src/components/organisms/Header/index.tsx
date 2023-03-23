import React from "react";

import Logo from "@/components/molecules/Header/Logo";
import NavBar from "@/components/molecules/Header/NavBar";
import Menu from "@/components/molecules/Header/Menu";

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
