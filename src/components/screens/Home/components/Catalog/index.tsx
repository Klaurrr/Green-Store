import React, { useEffect, useState } from "react";

import CardsList from "./CardsList.component";
import Menu from "./Menu.component";
import ShowPlants from "./ShowPlants.component";
import Pagination from "@/components/common/Pagination";

import { usePlantsStore } from "@/store";

import styles from "./styles/Catalog.module.scss";

export const Catalog = () => {
      const [activeCategory, setActiveCategory] = useState("default");
      const [sort, setSort] = useState<string>("default");

      const plants = usePlantsStore((state) => state.plants);

      const [dataForPagination, setDataForPagination] = useState(0);
      const [currentPage, setCurrentPage] = useState<number>(1);
      const [dataPerPage] = useState<number>(6);

      const lastDataIndex = currentPage * dataPerPage;
      const firstDataIndex = lastDataIndex - dataPerPage;

      useEffect(() => {
            setCurrentPage(1);
      }, [activeCategory]);

      return (
            <div className={styles.container}>
                  <div className={styles.wrapper}>
                        <Menu
                              active={activeCategory}
                              setActive={setActiveCategory}
                              setCurrentPage={setCurrentPage}
                        />
                        <CardsList
                              setSort={setSort}
                              showPlants={ShowPlants({
                                    sort,
                                    activeCategory,
                                    setDataForPagination,
                                    firstDataIndex,
                                    lastDataIndex,
                              })}
                        />
                  </div>
                  <div className={styles.pagination}>
                        <Pagination
                              dataPerPage={dataPerPage}
                              totalData={
                                    dataForPagination === 0 ? plants.length : dataForPagination
                              }
                              currentPage={currentPage}
                              setCurrentPage={setCurrentPage}
                              paginate={setCurrentPage}
                        />
                  </div>
            </div>
      );
};
