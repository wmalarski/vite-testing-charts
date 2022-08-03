import { Button } from "@chakra-ui/react";
import { useAuthService } from "@services/SessionService";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";

export const SignOutForm = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "SignOutForm" });

  const authService = useAuthService();

  const { mutate } = useMutation(authService.signOut);

  const handleClick = () => {
    mutate();
  };

  return <Button onClick={handleClick}>{t("button")}</Button>;
};
