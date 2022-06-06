import { useSessionStatus } from "@services/SessionService";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { SignInForm } from "./SignInForm/SignInForm";

const SignIn = (): ReactElement => {
  const status = useSessionStatus();

  if (status === "auth") {
    return <Navigate replace to={paths.root} />;
  }

  return <SignInForm />;
};

export default SignIn;
