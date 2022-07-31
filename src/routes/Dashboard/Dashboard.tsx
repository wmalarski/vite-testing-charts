import { VStack } from "@chakra-ui/react";
import { useSessionStatus } from "@services/SessionService";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { Playground } from "./Playground/Playground";
import { SignOutForm } from "./SignOutForm/SignOutForm";

const Dashboard = (): ReactElement => {
  const status = useSessionStatus();

  if (status === "anon") {
    return <Navigate replace to={paths.signIn} />;
  }

  return (
    <VStack>
      <SignOutForm />
      <Playground />
    </VStack>
  );
};

export default Dashboard;
