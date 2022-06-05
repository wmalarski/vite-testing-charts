import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  data?: string;
};

const NotFound = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "NotFound" });
  return (
    <div>
      <p>{t("NotFound")}</p>
      <div>{data}</div>
    </div>
  );
};

export default NotFound;
