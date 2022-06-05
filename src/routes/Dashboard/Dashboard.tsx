import { useSessionStatus } from "@services/SessionService";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  data?: string;
};

const Dashboard = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Dashboard" });

  const location = useLocation();
  const status = useSessionStatus();

  if (status === "anon") {
    return <Navigate replace state={{ from: location }} to={paths.signIn} />;
  }

  return (
    <div>
      <p>{t("Dashboard")}</p>
      <div>{data}</div>
    </div>
  );
};

export default Dashboard;
