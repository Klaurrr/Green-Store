import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import ReturnHat from "@/components/ui/ReturnHat";
import useWindowSize from "@/hooks/UseWindowSize";

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

      const isSmallScreen = useWindowSize();

      const onSubmit: SubmitHandler<{}> = (data) => {
            console.log(data);
      };

      return (
            <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
                  {isSmallScreen && <ReturnHat title="Account" />}
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
