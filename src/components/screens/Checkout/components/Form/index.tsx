import React, { FC } from "react";

import Input from "../../../../ui/Input";
import Select from "../../../../ui/Select";
import Checkbox from "../../../../ui/Checkbox";

import { IFormProps } from "./IForm.props";

import styles from "./Form.module.scss";

export const Form: FC<IFormProps> = ({
      Controller,
      control,
      errors,
      register,
      setValue,
      clearErrors,
}) => {
      const { Email, FirstName, LastName, Street, City, Zip, Country, Phone, State } =
            errors && errors;

      return (
            <section className={styles.container}>
                  <h3 className={styles.title}>Billing Address</h3>
                  <div className={styles.wrapper}>
                        <Controller
                              name="FirstName"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }: { [key: string]: any }) => (
                                    <Input
                                          title={"First Name"}
                                          required
                                          error={FirstName}
                                          {...field}
                                    />
                              )}
                              defaultValue=""
                        />
                        <Controller
                              name="LastName"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }: { [key: string]: any }) => (
                                    <Input
                                          title={"Last Name"}
                                          required
                                          error={LastName}
                                          {...field}
                                    />
                              )}
                              defaultValue=""
                        />
                  </div>
                  <div className={styles.wrapper}>
                        <Select
                              title={"Country / Region"}
                              answers={{
                                    title: "Countries",
                                    options: ["Russia", "USA", "US", "China", "Switzerland"],
                              }}
                              placeholder={"Select a country / region"}
                              width={"350px"}
                              register={(validate) => register("Country", { validate: validate })}
                              error={Country}
                              setValue={setValue}
                              clearErrors={clearErrors}
                        />
                        <Controller
                              name="City"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }: { [key: string]: any }) => (
                                    <Input title={"Town / City"} required error={City} {...field} />
                              )}
                              defaultValue=""
                        />
                  </div>
                  <div className={styles.wrapper}>
                        <Controller
                              name="Street"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }: { [key: string]: any }) => (
                                    <Input
                                          title={"Street Address"}
                                          placeholder="House number and street name"
                                          required
                                          error={Street}
                                          {...field}
                                    />
                              )}
                              defaultValue=""
                        />
                        <Controller
                              name="Appartment/suite/etc"
                              control={control}
                              render={({ field }: { [key: string]: any }) => (
                                    <Input
                                          placeholder="Appartment, suite, unit, etc. (optional)"
                                          {...field}
                                    />
                              )}
                              defaultValue=""
                        />
                  </div>
                  <div className={styles.wrapper}>
                        <Select
                              title={"State"}
                              answers={{
                                    title: "States",
                                    options: ["Nizhegorodskaya Obl", "Arizona"],
                              }}
                              placeholder={"Select a state"}
                              width={"350px"}
                              register={(validate) => register("State", { validate: validate })}
                              error={State}
                              setValue={setValue}
                              clearErrors={clearErrors}
                        />
                        <Controller
                              name="Zip"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }: { [key: string]: any }) => (
                                    <Input title={"Zip"} required error={Zip} {...field} />
                              )}
                              defaultValue=""
                        />
                  </div>
                  <div className={styles.wrapper}>
                        <Controller
                              name="Email"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }: { [key: string]: any }) => (
                                    <Input
                                          title={"Email Address"}
                                          required
                                          error={Email}
                                          {...field}
                                    />
                              )}
                              defaultValue=""
                        />
                        <Select
                              title="Phone Number"
                              width="80px"
                              answers={{
                                    title: "Phones",
                                    options: ["+799", "+535", "+964"],
                              }}
                              placeholder="+530"
                              register={(validate) => register("Phone", { validate: validate })}
                              error={Phone}
                              setValue={setValue}
                              clearErrors={clearErrors}
                        />
                  </div>
                  <Checkbox>Ship to a different address?</Checkbox>
                  <div className={styles.textarea}>
                        <h3>Order notes (optional)</h3>
                        <Controller
                              name="Order Notes"
                              control={control}
                              render={({ field }: { [key: string]: any }) => (
                                    <textarea {...field}></textarea>
                              )}
                              defaultValue=""
                        />
                  </div>
            </section>
      );
};
