import { useState } from "react";

import Categories from "@/components/atoms/CatalogMenuAtom/Categories";
import PriceRange from "@/components/atoms/CatalogMenuAtom/PriceRange";
import Size from "@/components/atoms/CatalogMenuAtom/Size";

import icons from "@/assets/icons";

import styles from "./CatalogMenu.module.scss";

const CatalogMenuMolecule = () => {
    const [active, setActive] = useState("Big Plants");

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.inner}>
                    <Categories active={active} setActive={setActive} />
                    <PriceRange />
                    <Size active={active} setActive={setActive} />
                </div>

                <img src={icons.Banner.src} alt="banner-img" />
            </div>
        </div>
    );
};

export default CatalogMenuMolecule;
