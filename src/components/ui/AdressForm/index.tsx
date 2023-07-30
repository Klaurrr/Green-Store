import { FC } from "react";

import { IFormProps } from "@/types/IForm.props";

import Input from "../Input";
import Select from "../Select";

import styles from "./AdressForm.module.scss";

const AdressForm: FC<IFormProps> = ({
      errors,
      control,
      register,
      setValue,
      clearErrors,
      Controller,
}) => {
      const { Email, FirstName, LastName, Street, City, Zip, Country, Phone, State } =
            errors && errors;
      return (
            <>
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
                        <div className={styles["optional-input"]}>
                              <Controller
                                    name="Appartment/suite/etc"
                                    control={control}
                                    render={({ field }: { [key: string]: any }) => (
                                          <Input
                                                placeholder="Appartment, suite, unit, etc. (optional)"
                                                style={{ display: "flex", alignItems: "flex-end" }}
                                                {...field}
                                          />
                                    )}
                                    defaultValue=""
                              />
                        </div>
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
                              rules={{
                                    required: true,
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              }}
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
                        <Controller
                              name="Phone"
                              control={control}
                              rules={{ required: true, pattern: /^\+?\d{1,12}$/ }}
                              render={({ field }: { [key: string]: any }) => (
                                    <Input
                                          title={"Phone Number"}
                                          required
                                          error={Phone}
                                          {...field}
                                    />
                              )}
                              defaultValue=""
                        />
                  </div>
            </>
      );
};

export default AdressForm;
