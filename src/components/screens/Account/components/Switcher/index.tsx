import { FC } from "react";
import clsx from "clsx";
import { signOut } from "next-auth/react";

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
            },
            {
                  image: <HeartMini />,
                  title: "Wishlist",
            },
            {
                  image: <Location />,
                  title: "Adress",
            },
      ];
      return (
            <div className={styles.container}>
                  <h2>My Account</h2>
                  <div className={styles.wrapper}>
                        {PAGES.map(({ image, title }) => (
                              <div
                                    className={clsx(
                                          styles.page,
                                          currentPage === title && styles.active
                                    )}
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
