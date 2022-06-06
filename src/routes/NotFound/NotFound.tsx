import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

const NotFound = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "NotFound" });

  return <span>{t("NotFound")}</span>;
};

export default NotFound;
