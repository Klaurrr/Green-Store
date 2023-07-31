import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import CartSvg from "@/../../public/assets/svg/CartSvg.svg";
import SearchIcon from "@/../../public/assets/svg/SearchIcon.svg";
import Button from "@/components/ui/Button";
import Login from "@/components/ui/Login";
import Logo from "@/components/ui/Logo";
import { usePlantsStore } from "@/store";
import { IPlantsState } from "@/types/IPlantsState";

import icons from "../../../public/assets/icons";

import styles from "./Header.module.scss";

const Header = React.memo(() => {
      const router = useRouter();

      const links = ["Home", "Shop", "Plant Care", "Blogs"];

      const { plants } = usePlantsStore((state: IPlantsState) => state?.cart);

      const [windowIsVisible, setWindowIsVisible] = useState(false);

      const session = useSession();

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
                                    }>
                                    {item}
                              </Link>
                        ))}
                  </nav>
                  <div className={styles.menu}>
                        <div className={styles.images}>
                              <SearchIcon />
                              <div
                                    className={styles.cart}
                                    onClick={() => router.push("/Shop/ShoppingCart")}>
                                    <CartSvg />
                                    <div className={styles.counter}>{plants.length}</div>
                              </div>
                        </div>
                        <div className={styles.auth}>
                              {session.status === "loading" && <ClipLoader color="#46A358" />}
                              {session.status === "authenticated" && (
                                    <Button
                                          style={{ width: "100px", height: "35px" }}
                                          handler={() => router.push("/Account")}>
                                          Account
                                    </Button>
                              )}
                              {session.status === "unauthenticated" && (
                                    <Button
                                          style={{ width: "100px", height: "35px" }}
                                          handler={() => setWindowIsVisible(true)}>
                                          <img
                                                src={icons.Logout.src}
                                                alt="logout-img"
                                                style={{ marginRight: "2px" }}
                                          />
                                          Login
                                    </Button>
                              )}
                        </div>
                  </div>
                  {windowIsVisible && <Login setWindowIsVisible={setWindowIsVisible} />}
            </header>
      );
});

export default Header;
