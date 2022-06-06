import { ComponentMeta, ComponentStory } from "@storybook/react";
import { mockSessionService } from "@tests/mocks/services";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import Dashboard from "./Dashboard";

export default {
  title: "routes/Dashboard",
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>;

type Props = ComponentProps<typeof Dashboard>;

const DashboardStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Dashboard {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof DashboardStory> = DashboardStory;
export const Playground = Story.bind({});
Playground.args = {
  wrapperProps: {
    session: mockSessionService("auth"),
  },
};
