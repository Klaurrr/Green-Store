import React from "react";

import HeaderMolecule from "@/components/molecules/HeaderMolecule";

import styles from "./Header.module.scss";

const Header = React.memo(() => {
    return (
        <header className={styles.container}>
            <HeaderMolecule />
        </header>
    );
});

export default Header;
