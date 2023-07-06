import React from "react";

import BreadCrumbs from "@/components/common/BreadCrumbs";

import { Form } from "./components/Form";
import { Order } from "./components/Order";

import styles from "./Checkout.module.scss";

const CheckoutPage = () => {
      return (
            <>
                  <BreadCrumbs />
                  <main className={styles.container}>
                        <Form />
                        <Order />
                  </main>
            </>
      );
};

export default CheckoutPage;
