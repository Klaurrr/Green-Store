import icons from "@/assets/icons";
import React, { useState } from "react";

import styles from "./NavBar.module.scss";

const NavBar = () => {
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

    return (
        <nav className={styles.container}>
            <ul className={styles.ul}>
                {["All Plants", "New Arrivals", "Sale"].map((li) => (
                    <li
                        onClick={() => setActive(li)}
                        className={active === li ? styles.active : ""}
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
                                onClick={() =>
                                    setSort((prev) => ({
                                        ...prev,
                                        sortView: sort,
                                    }))
                                }
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
