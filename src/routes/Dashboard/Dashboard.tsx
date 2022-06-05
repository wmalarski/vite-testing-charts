import { useAuthService, useSessionStatus } from "@services/SessionService";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { Navigate } from "react-router-dom";

const SignOut = (): ReactElement => {
  const authService = useAuthService();

  const { mutate } = useMutation(authService.signOut);

  return <button onClick={() => mutate()}>SignOut</button>;
};

const Dashboard = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Dashboard" });

  const status = useSessionStatus();

  if (status === "anon") {
    return <Navigate replace to={paths.signIn} />;
  }

  return (
    <div>
      <p>{t("Dashboard")}</p>
      <SignOut />
    </div>
  );
};

export default Dashboard;
