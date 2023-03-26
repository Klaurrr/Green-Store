import Categories from "@/components/atoms/CatalogMenuAtom/Categories";
import styles from "./CatalogMenu.module.scss";

const CatalogMenuMolecule = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Categories />
            </div>
        </div>
    );
};

export default CatalogMenuMolecule;
