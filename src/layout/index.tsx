import { FC } from "react";

import { Props } from "./Layout.props";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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
