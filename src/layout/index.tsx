import { FC } from "react";

import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

import { Props } from "./Layout.props";

import styles from "./Layout.module.scss";

const Layout: FC<Props> = ({ children }) => {
      return (
            <section className={styles.container}>
                  <Header />
                  {children}
                  <Footer />
            </section>
      );
};

export default Layout;
