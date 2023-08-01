import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import icons from "../../../../public/assets/icons";
import Cross from "../../../../public/assets/svg/Cross.svg";
import Hide from "../../../../public/assets/svg/Hide.svg";
import Button from "../Button";
import Input from "../Input";

import { ILoginProps } from "./Login.props";

import styles from "./Login.module.scss";

const Login: FC<ILoginProps> = ({ setWindowIsVisible }) => {
      const [mode, setMode] = useState("Login");

      const [hidePassword, setHidePassword] = useState(true);

      const router = useRouter();

      const {
            control,
            handleSubmit,
            formState: { errors },
      } = useForm();

      const onSubmit = async (data: any, event: any) => {
            event.preventDefault();
            const { email, password } = data;

            const res = await signIn("credentials", {
                  email,
                  password,
                  redirect: false,
            });

            if (res && !res.error) {
                  router.push("/Account");
            } else {
                  console.log(res);
            }
      };

      const searchParams = useSearchParams();
      const callbackUrl = searchParams.get("callbackUrl") || "/Home";

      useEffect(() => {
            document.body.style.overflowY = "hidden";

            return () => {
                  document.body.style.overflowY = "initial";
            };
      }, []);

      return (
            <>
                  {createPortal(
                        <div className={styles.container}>
                              <div className={styles.wrapper}>
                                    <Cross
                                          className={styles.cross}
                                          onClick={() => setWindowIsVisible(false)}
                                    />
                                    <div className={styles.modes}>
                                          <h1
                                                className={mode === "Login" ? styles.active : ""}
                                                onClick={() => setMode("Login")}>
                                                Login
                                          </h1>
                                          <span>|</span>
                                          <h1
                                                className={mode === "Register" ? styles.active : ""}
                                                onClick={() => setMode("Register")}>
                                                Register
                                          </h1>
                                    </div>
                                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                                          <h2>
                                                Enter your username and password to{" "}
                                                {mode === "Login" ? "Login" : "Register"}
                                          </h2>
                                          <div className={styles.inputs}>
                                                <Controller
                                                      name="email"
                                                      control={control}
                                                      rules={{
                                                            required: true,
                                                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                      }}
                                                      render={({
                                                            field,
                                                      }: {
                                                            [key: string]: any;
                                                      }) => (
                                                            <Input
                                                                  error={errors.email}
                                                                  style={{ width: "300px" }}
                                                                  placeholder="almamun_uxui@outlook.com"
                                                                  {...field}
                                                            />
                                                      )}
                                                      defaultValue=""
                                                />
                                                <Controller
                                                      name="password"
                                                      control={control}
                                                      rules={{ required: true, minLength: 5 }}
                                                      render={({
                                                            field,
                                                      }: {
                                                            [key: string]: any;
                                                      }) => (
                                                            <div
                                                                  className={
                                                                        styles["inputs-wrapper"]
                                                                  }>
                                                                  <Input
                                                                        error={errors.password}
                                                                        style={{ width: "300px" }}
                                                                        type={
                                                                              hidePassword
                                                                                    ? "password"
                                                                                    : "text"
                                                                        }
                                                                        {...field}
                                                                  />
                                                                  <Hide
                                                                        onClick={() =>
                                                                              setHidePassword(
                                                                                    !hidePassword
                                                                              )
                                                                        }
                                                                  />
                                                            </div>
                                                      )}
                                                      defaultValue=""
                                                />
                                          </div>
                                          <p className={styles.forgot}>Forgot Password?</p>
                                          <Button
                                                style={{ width: "300px", height: "45px" }}
                                                type="submit">
                                                {mode === "Login" ? "Login" : "Register"}
                                          </Button>
                                    </form>
                                    <div className={styles.alternative}>
                                          <div className={styles.login__with}>
                                                <div className={styles["strip-right"]}></div>
                                                <p>Or Login with</p>
                                                <div className={styles["strip-left"]}></div>
                                          </div>
                                          <div className={styles.socials}>
                                                <div
                                                      className={styles.social}
                                                      onClick={() =>
                                                            signIn("yandex", { callbackUrl })
                                                      }>
                                                      <img
                                                            src={icons.Yandex.src}
                                                            alt="social image"
                                                      />
                                                      <p>Login with Yandex</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>,
                        document.body
                  )}
            </>
      );
};

export default Login;
