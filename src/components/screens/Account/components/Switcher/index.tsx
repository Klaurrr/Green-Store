import { FC } from "react";
import clsx from "clsx";
import { signOut } from "next-auth/react";

import generateKey from "@/components/common/GenerateKey";

import icons from "../../../../../../public/assets/icons";
import HeartMini from "../../../../../../public/assets/svg/HeartMini.svg";
import Location from "../../../../../../public/assets/svg/Location.svg";
import User from "../../../../../../public/assets/svg/User.svg";

import { ISwitcherProps } from "./Switcher.props";

import styles from "./Switcher.module.scss";

export const Switcher: FC<ISwitcherProps> = ({ currentPage, setCurrentPage }) => {
      const PAGES = [
            {
                  image: <User />,
                  title: "Account Details",
                  id: generateKey("1"),
            },
            {
                  image: <HeartMini />,
                  title: "Wishlist",
                  id: generateKey("2"),
            },
            {
                  image: <Location />,
                  title: "Adress",
                  id: generateKey("3"),
            },
      ];
      return (
            <div className={styles.container}>
                  <h2>My Account</h2>
                  <div className={styles.wrapper}>
                        {PAGES.map(({ image, title, id }) => (
                              <div
                                    className={clsx(
                                          styles.page,
                                          currentPage === title && styles.active
                                    )}
                                    key={id}
                                    onClick={() => setCurrentPage(title)}>
                                    {image}
                                    <p>{title}</p>
                              </div>
                        ))}
                  </div>
                  <div className={styles.logout} onClick={() => signOut()}>
                        <img src={icons.LogoutGreen.src} alt="logout" />
                        <p>Logout</p>
                  </div>
            </div>
      );
};
