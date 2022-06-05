import { useAnonService } from "@services/SessionService";
import { VerifyCodeArgs } from "@utils/cognito";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";

export const VerifyCodeForm = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "VerifyCodeForm" });

  const anonService = useAnonService();

  const { mutate } = useMutation(anonService.verifyCode);

  const { register, handleSubmit } = useForm<VerifyCodeArgs>();
  const onSubmit = (data: VerifyCodeArgs) => mutate(data);

  return (
    <div>
      <p>{t("VerifyCodeForm")}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username
          <input {...register("username", { required: true })} />
        </label>
        <label>
          Code
          <input {...register("code", { required: true })} />
        </label>
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};
