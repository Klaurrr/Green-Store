import { FC } from "react";

import AccountForm from "@/components/ui/AccountForm";
import AdressForm from "@/components/ui/AdressForm";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { usePlantsStore } from "@/store";

import { IContentProps } from "./Content.props";

import styles from "./Content.module.scss";

export const Content: FC<IContentProps> = ({
      currentPage,
      Controller,
      control,
      errors,
      register,
      setValue,
      clearErrors,
}) => {
      const wishlist = usePlantsStore((state) => state.wishlist);

      const showContent = () => {
            switch (currentPage) {
                  case "Account Details":
                        return (
                              <>
                                    <AccountForm
                                          control={control}
                                          Controller={Controller}
                                          errors={errors}
                                          register={register}
                                          clearErrors={clearErrors}
                                          setValue={setValue}
                                    />
                                    <Button
                                          type="submit"
                                          style={{
                                                width: "130px",
                                                height: "40px",
                                                fontSize: "14px",
                                                fontWeight: "700",
                                                marginTop: "50px",
                                          }}>
                                          Save
                                    </Button>
                              </>
                        );
                  case "Adress":
                        return (
                              <>
                                    <AdressForm
                                          control={control}
                                          Controller={Controller}
                                          errors={errors}
                                          register={register}
                                          clearErrors={clearErrors}
                                          setValue={setValue}
                                    />
                                    <Button
                                          type="submit"
                                          style={{
                                                width: "130px",
                                                height: "40px",
                                                fontSize: "14px",
                                                fontWeight: "700",
                                                marginTop: "50px",
                                          }}>
                                          Save Adress
                                    </Button>
                              </>
                        );
                  case "Wishlist":
                        return (
                              <div className={styles.wishlist}>
                                    {wishlist.length > 0 ? (
                                          wishlist.map((plant) => <Card plant={plant} />)
                                    ) : (
                                          <h1>Ваш список пуст...</h1>
                                    )}
                              </div>
                        );
            }
      };
      return <div className={styles.container}>{showContent()}</div>;
};
