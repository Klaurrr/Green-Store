import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import BreadCrumbs from "@/components/common/BreadCrumbs";
import ModalWindow from "@/components/ui/ModalWindow";

import { Form } from "./components/Form";
import { Order } from "./components/Order";

import styles from "./Checkout.module.scss";

const CheckoutPage = () => {
      const [currentPaymentMethod, setCurrentPaymentMethod] = useState(0);
      const [windowIsVisible, setWindowIsVisible] = useState(false);

      const {
            handleSubmit,
            control,
            register,
            formState: { errors },
            clearErrors,
            setValue,
      } = useForm();

      const onSubmit = (data: any) => {
            const formData = Object.assign(data, {
                  PaymentMethod:
                        currentPaymentMethod === 0
                              ? "Cashless"
                              : currentPaymentMethod === 1
                              ? "Dorect bank transfer"
                              : "Cash on delivery",
            });

            fetch("https://api.sbercloud.ru/content/v1/bootcamp/frontend", {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
            })
                  .then((response) => response.json())
                  .finally(() => setWindowIsVisible(true));
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
                  {windowIsVisible && <ModalWindow setWindowIsVisible={setWindowIsVisible} />}
            </>
      );
};

export default CheckoutPage;
