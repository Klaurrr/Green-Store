import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Cart from "@/components/ui/Cart";
import Button from "@/components/ui/Button/Button";

import icons from "../../../../public/assets/icons";

import styles from "@/styles/components/common/Header.module.scss";

const Header = React.memo(() => {
      const router = useRouter();

      const NAV_ITEMS = ["Home", "Shop", "Plant Care", "Blogs"];

      return (
            <header className={styles.container}>
                  <div className={styles.logo}>
                        <img src={icons.Logo.src} alt="logo-img" />
                        <h1 className={styles.title}>GREENSHOP</h1>
                  </div>
                  <nav className={styles.nav}>
                        {NAV_ITEMS.map((item, index) => (
                              <Link
                                    key={index}
                                    href={`/${item.replace(/\s/g, "")}`}
                                    className={
                                          router.pathname === `/${item.replace(/\s/g, "")}`
                                                ? styles.active
                                                : ""
                                    }
                              >
                                    {item}
                              </Link>
                        ))}
                  </nav>
                  <div className={styles.menu}>
                        <div className={styles.images}>
                              <img src={icons.SearchIcon.src} alt="searchIcon-img" />
                              <Cart />
                        </div>
                        <Button width={"100px"} height={"35px"} text={"Login"} />
                  </div>
            </header>
      );
});

export default Header;
