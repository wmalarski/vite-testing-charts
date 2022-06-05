import { useAnonService, useSessionStatus } from "@services/SessionService";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { Navigate } from "react-router-dom";

const SignInForm = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "SignIn" });

  const anonService = useAnonService();

  const { mutate } = useMutation(anonService.signIn);

  return (
    <div>
      <h1>Auth</h1>
      <p>{t("SignIn")}</p>
      <button onClick={() => mutate({ password: "p", username: "u" })}>
        Sign In
      </button>
    </div>
  );
};

const SignIn = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "SignIn" });

  const status = useSessionStatus();

  if (status === "auth") {
    return <Navigate replace to={paths.root} />;
  }

  return (
    <div>
      <h1>Auth</h1>
      <p>{t("SignIn")}</p>
      <SignInForm />
    </div>
  );
};

export default SignIn;
