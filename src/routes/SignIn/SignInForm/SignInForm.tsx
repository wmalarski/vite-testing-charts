import { useAnonService } from "@services/SessionService";
import { SignInWithEmailArgs } from "@utils/cognito";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";

export const SignInForm = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "SignIn" });

  const anonService = useAnonService();

  const { mutate } = useMutation(anonService.signIn);

  const { register, handleSubmit } = useForm<SignInWithEmailArgs>();
  const onSubmit = (data: SignInWithEmailArgs) => mutate(data);

  return (
    <div>
      <p>{t("SignInForm")}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username
          <input {...register("username", { required: true })} />
        </label>
        <label>
          Password
          <input
            type="password"
            {...register("password", { required: true })}
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
