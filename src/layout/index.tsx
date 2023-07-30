import { FC } from "react";
import { SessionProvider } from "next-auth/react";

import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

import { Props } from "./Layout.props";

import styles from "./Layout.module.scss";

const Layout: FC<Props> = ({ children }) => {
      return (
            <section className={styles.container}>
                  <SessionProvider>
                        <Header />
                        {children}
                        <Footer />
                  </SessionProvider>
            </section>
      );
};

export default Layout;
