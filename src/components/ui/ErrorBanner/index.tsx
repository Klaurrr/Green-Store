import { useRouter } from "next/router";

import Button from "../Button";

import styles from "./ErrorBanner.module.scss";

const ErrorBanner = () => {
      const { push } = useRouter();

      return (
            <div className={styles.container}>
                  <div className={styles.wrapper_1}>
                        <div className={styles.description_container}>
                              <h3 className={styles.title}>Welcome to GreenShop</h3>
                              <h1 className={styles.subtitle}>
                                    This page does not <span>exist</span>
                              </h1>
                              <p className={styles.description}>
                                    There was an error, please come back
                              </p>
                        </div>
                        <Button
                              style={{ width: "140px", height: "40px", fontWeight: "700" }}
                              handler={() => push("/Home")}>
                              RETURN
                        </Button>
                  </div>
            </div>
      );
};

export default ErrorBanner;
