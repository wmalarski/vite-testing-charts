import { useSessionStatus } from "@services/SessionService";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { SignOutForm } from "./SignOutForm/SignOutForm";

const Dashboard = (): ReactElement => {
  const status = useSessionStatus();

  if (status === "anon") {
    return <Navigate replace to={paths.signIn} />;
  }

  return <SignOutForm />;
};

export default Dashboard;
