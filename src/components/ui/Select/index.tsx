import React, { FC, useState } from "react";
import { ISelectProps } from "./Select.props";

import styles from "@/styles/components/ui/Select.module.scss";
import icons from "../../../../public/assets/icons";

const Select: FC<ISelectProps> = ({ title, answers, placeholder, width }) => {
      const [{ isOpen, value }, setSelect] = useState({
            isOpen: false,
            value: "",
      });

      return (
            <div className={styles.container}>
                  <h3 className={styles.title}>
                        {title} <span>*</span>
                  </h3>
                  <div
                        className={styles.select}
                        style={{ width }}
                        onClick={() => setSelect((prev) => ({ ...prev, isOpen: !isOpen }))}
                  >
                        <div className={styles.field}>
                              <span className={value ? styles.value : styles.placeholder}>
                                    {value ? value : placeholder}
                              </span>
                              <img src={icons.ArrowDown.src} alt="arrow down" />
                        </div>
                        {isOpen && (
                              <div className={styles.answers}>
                                    {answers?.map((answer) => (
                                          <div
                                                onClick={() => {
                                                      setSelect((prev) => ({
                                                            ...prev,
                                                            isOpen: false,
                                                            value: answer,
                                                      }));
                                                }}
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
