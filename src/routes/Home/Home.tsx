import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  data?: string;
};

const Home = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Home" });
  return (
    <div>
      <p>{t("Home")}</p>
      <div>{data}</div>
    </div>
  );
};

export default Home;
