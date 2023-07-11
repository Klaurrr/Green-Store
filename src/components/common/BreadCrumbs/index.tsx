import { useRouter } from "next/router";

import styles from "./BreadCrumbs.module.scss";

const BreadCrumbs = () => {
      const router = useRouter();

      const getCurrentPath = () => {
            const initialPath = router.pathname;

            const splittedPath = initialPath.split("/");

            if (splittedPath.length === 3) {
                  if (splittedPath[2] === "[id]") {
                        return `${splittedPath[1]} / ${router.query.id}`;
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
