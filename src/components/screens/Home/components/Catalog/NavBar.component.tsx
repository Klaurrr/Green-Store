import React, { FC, useState } from "react";

import generateKey from "@/components/common/GenerateKey";

import icons from "../../../../../../public/assets/icons";

import { INavBarProps } from "./props/NavBar.props";

import styles from "./styles/NavBar.module.scss";

const NavBar: FC<INavBarProps> = ({ plantsFilter }) => {
      const [active, setActive] = useState("All Plants");

      const [sort, setSort] = useState({
            sortView: "Default sorting",
            dropActive: false,
      });

      const dropHandler = () => {
            setSort((prev) => ({
                  ...prev,
                  dropActive: !sort.dropActive,
            }));
      };

      const sortHandler = (sort: string) => {
            setSort((prev) => ({
                  ...prev,
                  sortView: sort,
            }));
            plantsFilter(sort);
      };

      return (
            <nav className={styles.container}>
                  <ul className={styles.ul}>
                        {["All Plants", "New Arrivals", "Sale"].map((li) => (
                              <li
                                    onClick={() => setActive(li)}
                                    className={active === li ? styles.active : ""}
                                    key={generateKey(li)}
                              >
                                    {li}
                              </li>
                        ))}
                  </ul>
                  <div className={styles.sort} onClick={dropHandler}>
                        <p className={styles.sort_view}>
                              Short by: {sort.sortView}
                              <img src={icons.Arrow.src} alt="arrow-img" />
                        </p>
                        {sort.dropActive && (
                              <div className={styles.drop}>
                                    {["Ascending", "Descending"].map((sort) => (
                                          <p
                                                onClick={() => sortHandler(sort)}
                                                key={generateKey(sort)}
                                          >
                                                {sort} sorting
                                          </p>
                                    ))}
                              </div>
                        )}
                  </div>
            </nav>
      );
};

export default NavBar;
