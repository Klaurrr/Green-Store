import { FC, ReactNode } from "react";
import Header from "../../organisms/Header";

import styles from "./Layout.module.scss";

type LayoutProps = {
    children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <section className={styles.container}>
            <Header />
            {children}
        </section>
    );
};

export default Layout;
