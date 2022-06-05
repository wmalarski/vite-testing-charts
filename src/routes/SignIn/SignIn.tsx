import { useAnonService } from "@services/SessionService";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";

const SignIn = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "SignIn" });

  const anonService = useAnonService();

  const { mutate } = useMutation(anonService.signIn);

  return (
    <div>
      <p>{t("SignIn")}</p>
      <button onClick={() => mutate({ password: "p", username: "u" })}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
