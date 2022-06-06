import { useAnonService } from "@services/SessionService";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";

export const SignInForm = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "SignIn" });

  const anonService = useAnonService();

  const { mutate } = useMutation(anonService.signIn);

  const onClick = () => {
    mutate();
  };

  return <button onClick={onClick}>{t("button")}</button>;
};
