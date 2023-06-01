import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Cart from "@/components/ui/Cart";
import Button from "@/components/ui/Button";

import SearchIcon from "@/../../public/assets/svg/SearchIcon.svg";

import Logo from "@/components/ui/Logo";

import styles from "@/styles/components/common/Header.module.scss";

const Header = React.memo(() => {
      const router = useRouter();

      const links = ["Home", "Shop", "Plant Care", "Blogs"];

      return (
            <header className={styles.container}>
                  <Logo />
                  <nav className={styles.nav}>
                        {links.map((item, index) => (
                              <Link
                                    key={index}
                                    href={`/${item.replace(/\s/g, "")}`}
                                    className={
                                          router.pathname.split("/")[1] ===
                                          `${item.replace(/\s/g, "")}`
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
                              <SearchIcon />
                              <Cart />
                        </div>
                        <Button width={"100px"} height={"35px"} text={"Login"} />
                  </div>
            </header>
      );
});

export default Header;
