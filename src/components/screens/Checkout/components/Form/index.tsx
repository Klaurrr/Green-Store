import React from "react";

import Input from "../../../../ui/Input";
import Select from "../../../../ui/Select";
import Checkbox from "../../../../ui/Checkbox";

import styles from "./Form.module.scss";

export const Form = () => {
      return (
            <section className={styles.container}>
                  <h3 className={styles.title}>Billing Address</h3>
                  <div className={styles.wrapper}>
                        <Input title={"First Name"} required />
                        <Input title={"Last Name"} required />
                  </div>
                  <div className={styles.wrapper}>
                        <Select
                              title={"Country / Region"}
                              answers={["Russia", "USA", "US", "China", "Switzerland"]}
                              placeholder={"Select a country / region"}
                              width={"350px"}
                        />
                        <Input title={"Town / City"} required />
                  </div>
                  <div className={styles.wrapper}>
                        <Input
                              title={"Street Address"}
                              placeholder="House number and street name"
                              required
                        />
                        <Input placeholder="Appartment, suite, unit, etc. (optional)" />
                  </div>
                  <div className={styles.wrapper}>
                        <Select
                              title={"State"}
                              answers={["Nizhegorodskaya Obl", "Arizona"]}
                              placeholder={"Select a state"}
                              width={"350px"}
                        />
                        <Input title={"Zip"} required />
                  </div>
                  <div className={styles.wrapper}>
                        <Input title={"Email Address"} required />
                        <Select
                              title="Phone Number"
                              width="80px"
                              answers={["+799", "+966", "+155"]}
                              placeholder="+530"
                        />
                  </div>
                  <Checkbox />
                  <div className={styles.textarea}>
                        <h3>Order notes (optional)</h3>
                        <textarea></textarea>
                  </div>
            </section>
      );
};
