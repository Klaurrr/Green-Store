import { useState } from "react";
import CardsList from "./CardsList.component";
import Menu from "./Menu.component";

import styles from "@/styles/components/ui/Catalog.module.scss";

const Catalog = () => {
      const [active, setActive] = useState("default");

      return (
            <div className={styles.container}>
                  <Menu active={active} setActive={setActive} />
                  <CardsList active={active} />
            </div>
      );
};

export default Catalog;
