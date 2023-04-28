import { FC } from "react";

import { Props } from "./Layout.props";

import Header from "@/components/common/Header";

import styles from "@/styles/layout/Layout.module.scss";

const Layout: FC<Props> = ({ children }) => {
      return (
            <section className={styles.container}>
                  <Header />
                  {children}
            </section>
      );
};

export default Layout;
