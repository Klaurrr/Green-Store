import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Button from "@/components/ui/Button";

import SearchIcon from "@/../../public/assets/svg/SearchIcon.svg";

import Logo from "@/components/ui/Logo";

import CartSvg from "@/../../public/assets/svg/CartSvg.svg";

import { usePlantsStore } from "@/store";
import { IPlantsState } from "@/types/IPlantsState";

import styles from "./Header.module.scss";

const Header = React.memo(() => {
      const router = useRouter();

      const links = ["Home", "Shop", "Plant Care", "Blogs"];

      const { plants } = usePlantsStore((state: IPlantsState) => state?.cart);

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
                              <div
                                    className={styles.cart}
                                    onClick={() => router.push("/Shop/ShoppingCart")}
                              >
                                    <CartSvg />
                                    <div className={styles.counter}>{plants.length}</div>
                              </div>
                        </div>
                        <Button style={{ width: "100px", height: "35px" }}>Login</Button>
                  </div>
            </header>
      );
});

export default Header;
