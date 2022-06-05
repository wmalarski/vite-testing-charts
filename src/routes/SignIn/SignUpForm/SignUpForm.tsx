import { useAnonService } from "@services/SessionService";
import { SignUpUserWithEmailArgs } from "@utils/cognito";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";

export const SignUpForm = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "SignUpForm" });

  const anonService = useAnonService();

  const { mutate } = useMutation(anonService.signUp);

  const { register, handleSubmit } = useForm<SignUpUserWithEmailArgs>();
  const onSubmit = (data: SignUpUserWithEmailArgs) => mutate(data);

  return (
    <div>
      <p>{t("SignUpForm")}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input {...register("email", { required: true })} />
        </label>
        <label>
          Username
          <input {...register("username", { required: true })} />
        </label>
        <label>
          Password
          <input {...register("password", { required: true })} />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
