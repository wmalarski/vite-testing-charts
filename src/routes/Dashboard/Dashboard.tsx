import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { useSessionStatus } from "@services/SessionService";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { Playground } from "./Playground/Playground";
import { Sandbox } from "./Sandbox/Sandbox";
import { SignOutForm } from "./SignOutForm/SignOutForm";

const Dashboard = (): ReactElement => {
  const status = useSessionStatus();

  if (status === "anon") {
    return <Navigate replace to={paths.signIn} />;
  }

  return (
    <VStack w="full">
      <SignOutForm />
      <Tabs w="full">
        <TabList w="full">
          <Tab>MobX</Tab>
          <Tab>XState</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Sandbox />
          </TabPanel>
          <TabPanel>
            <Playground />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default Dashboard;
