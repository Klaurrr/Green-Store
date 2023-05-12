import { useEffect, useState } from "react";
import CardsList from "./CardsList.component";
import Menu from "./Menu.component";

import styles from "@/styles/components/ui/Catalog.module.scss";
import Pagination from "@/components/common/Pagination";
import { usePlantsStore } from "@/store";

const Catalog = () => {
      const [active, setActive] = useState("default");

      const plants = usePlantsStore((state) => state.plants);

      const [currentPage, setCurrentPage] = useState<number>(1);
      const [dataPerPage] = useState<number>(1);
      const [totalData, setTotalData] = useState(plants.length);

      const lastDataIndex = currentPage * dataPerPage;
      const firstDataIndex = lastDataIndex - dataPerPage;

      useEffect(() => {
            setCurrentPage(1);
      }, [active]);

      return (
            <div className={styles.container}>
                  <div className={styles.wrapper}>
                        <Menu
                              active={active}
                              setActive={setActive}
                              setCurrentPage={setCurrentPage}
                        />
                        <CardsList
                              active={active}
                              lastDataIndex={lastDataIndex}
                              firstDataIndex={firstDataIndex}
                              setTotalData={setTotalData}
                        />
                  </div>
                  <div className={styles.pagination}>
                        <Pagination
                              dataPerPage={dataPerPage}
                              totalData={totalData}
                              currentPage={currentPage}
                              setCurrentPage={setCurrentPage}
                              paginate={setCurrentPage}
                        />
                  </div>
            </div>
      );
};

export default Catalog;
