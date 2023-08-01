import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Content, Switcher } from "./components";

import styles from "./Account.module.scss";

const AccountPage = () => {
      const [currentPage, setCurrentPage] = useState("Account Details");

      const {
            handleSubmit,
            control,
            register,
            formState: { errors },
            clearErrors,
            setValue,
      } = useForm();

      const onSubmit = (data: any) => {
            console.log(data);
      };

      return (
            <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
                  <Switcher setCurrentPage={setCurrentPage} currentPage={currentPage} />
                  <Content
                        currentPage={currentPage}
                        control={control}
                        Controller={Controller}
                        errors={errors}
                        register={register}
                        clearErrors={clearErrors}
                        setValue={setValue}
                  />
            </form>
      );
};

export default AccountPage;
