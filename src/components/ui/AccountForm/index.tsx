import { FC, useState } from "react";
import { useSession } from "next-auth/react";

import { IFormProps } from "@/types/IForm.props";

import icons from "../../../../public/assets/icons";
import Hide from "../../../../public/assets/svg/Hide.svg";
import Button from "../Button";
import Input from "../Input";

import styles from "./AccountForm.module.scss";

const AccountForm: FC<IFormProps> = ({
      errors,
      control,
      register,
      setValue,
      clearErrors,
      Controller,
}) => {
      const {
            PersonalEmail,
            FirstNamePers,
            LastNamePers,
            PhoneNum,
            UserName,
            ConfirmPass,
            NewPass,
            CurrentPass,
      } = errors && errors;

      const session = useSession();

      const [hidePassword, setHidePassword] = useState({
            currentPass: true,
            newPass: true,
            confirmNewPass: true,
      });

      return (
            <>
                  <h3 className={styles.title}>Personal Information</h3>
                  <div className={styles.wrapper}>
                        <Controller
                              name="FirstNamePers"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }: { [key: string]: any }) => (
                                    <Input
                                          title={"First Name"}
                                          required
                                          error={FirstNamePers}
                                          {...field}
                                    />
                              )}
                              defaultValue=""
                        />
                        <Controller
                              name="LastNamePers"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }: { [key: string]: any }) => (
                                    <Input
                                          title={"Last Name"}
                                          required
                                          error={LastNamePers}
                                          {...field}
                                    />
                              )}
                              defaultValue=""
                        />
                  </div>
                  <div className={styles.wrapper}>
                        <Controller
                              name="PersonalEmail"
                              control={control}
                              rules={{
                                    required: true,
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              }}
                              render={({ field }: { [key: string]: any }) => (
                                    <Input
                                          title={"Email Address"}
                                          required
                                          error={PersonalEmail}
                                          {...field}
                                    />
                              )}
                              defaultValue=""
                        />
                        <Controller
                              name="PhoneNum"
                              control={control}
                              rules={{ required: true, pattern: /^\+?\d{1,12}$/ }}
                              render={({ field }: { [key: string]: any }) => (
                                    <Input
                                          title={"Phone Number"}
                                          required
                                          error={PhoneNum}
                                          {...field}
                                    />
                              )}
                              defaultValue=""
                        />
                  </div>
                  <div className={styles.wrapper}>
                        <Controller
                              name="UserName"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }: { [key: string]: any }) => (
                                    <Input
                                          title={"Username"}
                                          required
                                          error={UserName}
                                          {...field}
                                    />
                              )}
                              defaultValue=""
                        />
                        <div className={styles.change}>
                              <h3>Photo</h3>
                              <div className={styles.change__wrapper}>
                                    <div>
                                          <img
                                                className={
                                                      session.data?.user?.image ? styles.hasImg : ""
                                                }
                                                src={
                                                      session.data?.user?.image
                                                            ? session.data?.user?.image
                                                            : icons.JustImage.src
                                                }
                                                alt="just image "
                                          />
                                    </div>

                                    <div>
                                          <Button
                                                type="button"
                                                style={{
                                                      width: "98px",
                                                      height: "40px",
                                                      fontSize: "14px",
                                                      fontWeight: "700",
                                                }}>
                                                Change
                                          </Button>
                                          <button type="button" className={styles.remove}>
                                                Remove
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className={styles.password}>
                        <h3 className={styles.title}>Password change</h3>
                        <Controller
                              name="CurrentPass"
                              control={control}
                              rules={{ required: true }}
                              render={({ field }: { [key: string]: any }) => (
                                    <div className={styles.input__wrapper}>
                                          <h3>Current Password</h3>
                                          <Input
                                                error={CurrentPass}
                                                type={
                                                      hidePassword.currentPass ? "password" : "text"
                                                }
                                                {...field}
                                          />
                                          <Hide
                                                onClick={() =>
                                                      setHidePassword((prev) => ({
                                                            ...prev,
                                                            currentPass: !hidePassword.currentPass,
                                                      }))
                                                }
                                          />
                                    </div>
                              )}
                              defaultValue=""
                        />
                        <Controller
                              name="NewPass"
                              control={control}
                              rules={{ required: false }}
                              render={({ field }: { [key: string]: any }) => (
                                    <div className={styles.input__wrapper}>
                                          <h3>New password</h3>
                                          <Input
                                                error={NewPass}
                                                type={hidePassword.newPass ? "password" : "text"}
                                                {...field}
                                          />
                                          <Hide
                                                onClick={() =>
                                                      setHidePassword((prev) => ({
                                                            ...prev,
                                                            newPass: !hidePassword.newPass,
                                                      }))
                                                }
                                          />
                                    </div>
                              )}
                              defaultValue=""
                        />
                        <Controller
                              name="ConfirmPass"
                              control={control}
                              rules={{ required: false }}
                              render={({ field }: { [key: string]: any }) => (
                                    <div className={styles.input__wrapper}>
                                          <h3>Confirm new password</h3>
                                          <Input
                                                error={ConfirmPass}
                                                type={
                                                      hidePassword.confirmNewPass
                                                            ? "password"
                                                            : "text"
                                                }
                                                {...field}
                                          />
                                          <Hide
                                                onClick={() =>
                                                      setHidePassword((prev) => ({
                                                            ...prev,
                                                            confirmNewPass:
                                                                  !hidePassword.confirmNewPass,
                                                      }))
                                                }
                                          />
                                    </div>
                              )}
                              defaultValue=""
                        />
                  </div>
            </>
      );
};

export default AccountForm;
