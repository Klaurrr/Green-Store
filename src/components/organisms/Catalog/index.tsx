import CatalogCardsMolecule from "@/components/molecules/CatalogCardsMolecule";
import CatalogMenuMolecule from "@/components/molecules/CatalogMenuMolecule";
import styles from "./Catalog.module.scss";

const Catalog = () => {
    return (
        <div className={styles.container}>
            <CatalogMenuMolecule />
            <CatalogCardsMolecule />
        </div>
    );
};

export default Catalog;
