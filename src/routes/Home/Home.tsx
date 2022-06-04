import { useSessionStatus } from "@services/SessionService";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

const Home = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Home" });

  const status = useSessionStatus();

  if (status === "loading") {
    return <p>{t("Loading")}</p>;
  }

  if (status === "anon") {
    return <p>{t("Redirect to login")}</p>;
  }

  return (
    <div>
      <p>{t("Home")}</p>
    </div>
  );
};

export default Home;
