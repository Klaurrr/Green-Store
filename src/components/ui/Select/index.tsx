import React, { FC, useEffect, useState } from "react";
import clsx from "clsx";

import generateKey from "@/components/common/GenerateKey";

import icons from "../../../../public/assets/icons";

import { ISelectProps } from "./Select.props";

import styles from "./Select.module.scss";

const Select: FC<ISelectProps> = ({
      title,
      answers,
      placeholder,
      width,
      register,
      error,
      setValue,
      clearErrors,
}) => {
      const [{ isOpen, value }, setSelect] = useState({
            isOpen: false,
            value: "",
      });

      useEffect(() => {
            register(() => value !== "");
      }, [value]);

      const selectOption = (answer: string) => {
            setSelect((prev) => ({
                  ...prev,
                  isOpen: false,
                  value: answer,
            }));
            switch (answers.title) {
                  case "Countries":
                        setValue("Country", answer);
                        clearErrors("Country");
                        break;
                  case "States":
                        setValue("State", answer);
                        clearErrors("State");
                        break;
                  case "Phones":
                        setValue("Phone", answer);
                        clearErrors("Phone");
                        break;
            }
      };
      return (
            <div className={styles.container}>
                  <h3 className={styles.title}>
                        {title} <span>*</span>
                  </h3>
                  <div
                        className={clsx(styles.select, error && styles.error)}
                        style={{ width }}
                        onClick={() => setSelect((prev) => ({ ...prev, isOpen: !isOpen }))}
                        {...register}
                  >
                        <div className={styles.field}>
                              <span className={value ? styles.value : styles.placeholder}>
                                    {value ? value : placeholder}
                              </span>
                              <img src={icons.ArrowDown.src} alt="arrow down" />
                        </div>
                        {isOpen && (
                              <div className={styles.answers}>
                                    {answers?.options?.map((answer) => (
                                          <div
                                                onClick={() => selectOption(answer)}
                                                key={generateKey(answer)}
                                          >
                                                {answer}
                                          </div>
                                    ))}
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default Select;
