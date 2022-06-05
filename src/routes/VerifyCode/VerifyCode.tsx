import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  data?: string;
};

const VerifyCode = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "VerifyCode" });
  return (
    <div>
      <p>{t("VerifyCode")}</p>
      <div>{data}</div>
    </div>
  );
};

export default VerifyCode;
