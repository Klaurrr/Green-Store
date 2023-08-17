import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import CartSvg from "@/../../public/assets/svg/CartSvg.svg";
import Filter from "@/../../public/assets/svg/Filter.svg";
import SearchIcon from "@/../../public/assets/svg/SearchIcon.svg";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import useCurrentPath from "@/hooks/UseCurrentPath";
import useWindowSize from "@/hooks/UseWindowSize";
import { usePlantsStore } from "@/store";
import { IPlantsState } from "@/types/IPlantsState";

import icons from "../../../public/assets/icons";

import Home from "./../../../public/assets/svg/Home.svg";
import Scanner from "./../../../public/assets/svg/Scanner.svg";
import Shop from "./../../../public/assets/svg/Shop.svg";
import UserIcon from "./../../../public/assets/svg/UserIcon.svg";
import WishList from "./../../../public/assets/svg/Wishlist.svg";

import styles from "./Header.module.scss";

const DynamicLogin = dynamic(() => import("@/components/ui/Login"), { ssr: false });

const Header = React.memo(() => {
      const { push } = useRouter();

      const { plants } = usePlantsStore((state: IPlantsState) => state?.cart);

      const [windowIsVisible, setWindowIsVisible] = useState(false);

      const session = useSession();

      const isSmallScreen = useWindowSize();

      const currentPath = useCurrentPath();

      return (
            <header>
                  {isSmallScreen && (
                        <form className={styles.form}>
                              <div className={styles.input__wrapper}>
                                    <SearchIcon />
                                    <input type="text" placeholder="Find your plants" />
                              </div>

                              <div className={styles.button}>
                                    <Filter />
                              </div>
                        </form>
                  )}
                  <main className={styles.container}>
                        {isSmallScreen && (
                              <>
                                    <nav className={styles.smallscreen__icons}>
                                          <div>
                                                <Home
                                                      className={
                                                            currentPath === "Home"
                                                                  ? styles.icon__active
                                                                  : ""
                                                      }
                                                      onClick={() => push("/Home")}
                                                />
                                                <WishList
                                                      className={
                                                            currentPath === "Account"
                                                                  ? styles.icon__active
                                                                  : ""
                                                      }
                                                      onClick={() => {
                                                            if (
                                                                  session.status ===
                                                                  "unauthenticated"
                                                            ) {
                                                                  setWindowIsVisible(true);
                                                            } else {
                                                                  push("/Account");
                                                            }
                                                      }}
                                                />
                                          </div>
                                          <div className={styles.circle}>
                                                <div>
                                                      <Scanner />
                                                </div>
                                          </div>
                                          <div>
                                                <Shop
                                                      className={
                                                            currentPath === "Shop"
                                                                  ? styles.icon__active
                                                                  : ""
                                                      }
                                                      onClick={() => push("/Shop/ShoppingCart")}
                                                />
                                                <UserIcon
                                                      className={
                                                            currentPath === "Account"
                                                                  ? styles.icon__active
                                                                  : ""
                                                      }
                                                      onClick={() => {
                                                            if (
                                                                  session.status ===
                                                                  "unauthenticated"
                                                            ) {
                                                                  setWindowIsVisible(true);
                                                            } else {
                                                                  push("/Account");
                                                            }
                                                      }}
                                                />
                                          </div>
                                    </nav>
                              </>
                        )}
                        <Logo />
                        <nav className={styles.nav}>
                              {["Home", "Shop", "Plant Care", "Blogs"].map((item, index) => (
                                    <Link
                                          key={index}
                                          href={`/${item.replace(/\s/g, "")}`}
                                          className={
                                                currentPath === `${item.replace(/\s/g, "")}`
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
                                          onClick={() => push("/Shop/ShoppingCart")}>
                                          <CartSvg />
                                          <div className={styles.counter}>{plants.length}</div>
                                    </div>
                              </div>
                              <div className={styles.auth}>
                                    {session.status === "loading" && <ClipLoader color="#46A358" />}
                                    {session.status === "authenticated" && (
                                          <Button
                                                style={{ width: "100px", height: "35px" }}
                                                handler={() => push("/Account")}>
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
                        {windowIsVisible && (
                              <DynamicLogin setWindowIsVisible={setWindowIsVisible} />
                        )}
                  </main>
            </header>
      );
});

export default Header;
