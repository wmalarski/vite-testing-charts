import { useAuthService } from "@services/SessionService";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";

const Dashboard = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Dashboard" });

  const authService = useAuthService();

  const { mutate } = useMutation(authService.signOut);

  return (
    <div>
      <p>{t("Dashboard")}</p>
      <button onClick={() => mutate()}>SignOut</button>
    </div>
  );
};

export default Dashboard;
