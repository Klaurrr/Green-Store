import CardsList from "./CardsList.component";
import Menu from "./Menu.component";

import styles from "@/styles/components/ui/Catalog.module.scss";

const Catalog = () => {
      return (
            <div className={styles.container}>
                  <Menu />
                  <CardsList />
            </div>
      );
};

export default Catalog;
