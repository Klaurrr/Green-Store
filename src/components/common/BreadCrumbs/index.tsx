import { useRouter } from "next/router";

import styles from "./BreadCrumbs.module.scss";

const BreadCrumbs = () => {
      const {
            query: { id },
            pathname,
      } = useRouter();

      const getCurrentPath = () => {
            const initialPath = pathname;
            const splittedPath = initialPath.split("/");

            if (splittedPath.length === 3) {
                  if (splittedPath[2] === "[id]") {
                        return `${splittedPath[1]} / ${id}`;
                  }
                  return `${splittedPath[1]} / ${splittedPath[2]}`;
            }

            if (splittedPath[1] === "Shop") {
                  return "Shop";
            }
      };

      return (
            <nav className={styles.container}>
                  <span>Home</span> / {getCurrentPath()}
            </nav>
      );
};

export default BreadCrumbs;
