import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";

const handleLogin = async (
      setLoading: any,
      data: any,
      setWindowIsVisible: any,
      setSubmitError: any
) => {
      const { email, password } = data;
      setLoading(true);
      const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
      });

      if (res && !res.error) {
            setWindowIsVisible(false);
      } else {
            setSubmitError(res?.error || "unknown error");
      }

      setLoading(false);
};

const handleRegistration = async (
      data: any,
      setWindowIsVisible: any,
      setSubmitError: any,
      setLoading: any
) => {
      try {
            const { email, password } = data;
            setLoading(true);
            const apiRes = await axios.post(process.env.SIGNUP!, data);
            if (apiRes?.data?.success) {
                  const res = await signIn("credentials", {
                        email,
                        password,
                        redirect: false,
                  });

                  if (res && !res.error) {
                        setWindowIsVisible(false);
                  } else {
                        setSubmitError(res?.error || "unknown error");
                  }
            }
      } catch (error: unknown) {
            if (error instanceof AxiosError) {
                  const errorMsg = error.response?.data?.error;
                  setSubmitError(errorMsg);
            }
      }

      setLoading(false);
};

export { handleLogin, handleRegistration };
