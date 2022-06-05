import { useSessionStatus } from "@services/SessionService";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Outlet } from "react-router";

const Home = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Home" });

  const status = useSessionStatus();

  if (status === "loading") {
    return <span>{t("Loading")}</span>;
  }

  if (status === "auth") {
    return <Navigate replace to={paths.dashboard} />;
  }

  return <Outlet />;
};

export default Home;
