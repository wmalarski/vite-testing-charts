import { useSessionStatus } from "@services/SessionService";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";

const Home = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Home" });

  const status = useSessionStatus();

  if (status === "loading") {
    return <span>{t("Loading")}</span>;
  }

  return <Outlet />;
};

export default Home;
