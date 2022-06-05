import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  data?: string;
};

const SignIn = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "SignIn" });
  return (
    <div>
      <p>{t("SignIn")}</p>
      <div>{data}</div>
    </div>
  );
};

export default SignIn;
