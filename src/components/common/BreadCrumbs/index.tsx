import { useRouter } from "next/router";

import styles from "@/styles/components/common/BreadCrumbs.module.scss";

const BreadCrumbs = () => {
      const router = useRouter();

      const getCurrentPath = () => {
            const initialPath = router.pathname;

            const splittedPath = initialPath.split("/");

            if (splittedPath[splittedPath.length - 1] === "[id]") {
                  return splittedPath[1];
            }
      };

      return (
            <nav className={styles.container}>
                  <span>Home</span> / {getCurrentPath()}
            </nav>
      );
};

export default BreadCrumbs;
