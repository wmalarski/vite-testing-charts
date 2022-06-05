import { Flex } from "@chakra-ui/react";
import { useSessionStatus } from "@services/SessionService";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { SignInForm } from "./SignInForm/SignInForm";
import { SignUpForm } from "./SignUpForm/SignUpForm";
import { VerifyCodeForm } from "./VerifyCodeForm/VerifyCodeForm";

const SignIn = (): ReactElement => {
  const status = useSessionStatus();

  if (status === "auth") {
    return <Navigate replace to={paths.root} />;
  }

  return (
    <Flex flexDirection="column">
      <SignInForm />
      <SignUpForm />
      <VerifyCodeForm />
    </Flex>
  );
};

export default SignIn;
