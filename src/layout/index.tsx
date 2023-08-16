import { FC } from "react";
import { SessionProvider } from "next-auth/react";

import useCurrentPath from "@/hooks/UseCurrentPath";
import useWindowSize from "@/hooks/UseWindowSize";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

import { Props } from "./Layout.props";

import styles from "./Layout.module.scss";

const Layout: FC<Props> = ({ children }) => {
      const currentPath = useCurrentPath();
      const isSmallScreen = useWindowSize();

      return (
            <section className={styles.container}>
                  <SessionProvider>
                        {isSmallScreen && (currentPath === "Shop" || currentPath === "Account") ? (
                              <></>
                        ) : (
                              <Header />
                        )}
                        {children}
                        {isSmallScreen && (currentPath === "Shop" || currentPath === "Account") ? (
                              <></>
                        ) : (
                              <Footer />
                        )}
                  </SessionProvider>
            </section>
      );
};

export default Layout;
