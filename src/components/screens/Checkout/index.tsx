import React, { useState } from "react";

import BreadCrumbs from "@/components/common/BreadCrumbs";

import { Form } from "./components/Form";
import { Order } from "./components/Order";

import { useForm, Controller } from "react-hook-form";

import styles from "./Checkout.module.scss";

const CheckoutPage = () => {
      const [currentPaymentMethod, setCurrentPaymentMethod] = useState(0);

      const {
            handleSubmit,
            control,
            register,
            formState: { errors },
            clearErrors,
            setValue,
      } = useForm();

      const onSubmit = (data: any) => {
            console.log(
                  Object.assign(data, {
                        PaymentMethod:
                              currentPaymentMethod === 0
                                    ? "Cashless"
                                    : currentPaymentMethod === 1
                                    ? "Dorect bank transfer"
                                    : "Cash on delivery",
                  })
            );
      };

      return (
            <>
                  <BreadCrumbs />
                  <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
                        <Form
                              control={control}
                              Controller={Controller}
                              errors={errors}
                              register={register}
                              clearErrors={clearErrors}
                              setValue={setValue}
                        />
                        <Order
                              currentPaymentMethod={currentPaymentMethod}
                              setCurrentPaymentMethod={setCurrentPaymentMethod}
                        />
                  </form>
            </>
      );
};

export default CheckoutPage;
