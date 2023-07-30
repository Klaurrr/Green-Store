import React, { FC } from "react";

import AdressForm from "@/components/ui/AdressForm";
import { IFormProps } from "@/types/IForm.props";

import Checkbox from "../../../../ui/Checkbox";

import styles from "./Form.module.scss";

export const Form: FC<IFormProps> = ({
      Controller,
      control,
      errors,
      register,
      setValue,
      clearErrors,
}) => {
      return (
            <section className={styles.container}>
                  <AdressForm
                        Controller={Controller}
                        control={control}
                        errors={errors}
                        register={register}
                        setValue={setValue}
                        clearErrors={clearErrors}
                  />
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
