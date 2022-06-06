import { useSessionStatus } from "@services/SessionService";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

const Root = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Root" });

  const status = useSessionStatus();

  if (status === "loading") {
    return <span>{t("Loading")}</span>;
  }

  return <Outlet />;
};

export default Root;
