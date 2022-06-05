import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  data?: string;
};

const SignUp = ({ data }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "SignUp" });
  return (
    <div>
      <p>{t("SignUp")}</p>
      <div>{data}</div>
    </div>
  );
};

export default SignUp;
