import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import Home from "./Home";

export default {
  title: "routes/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

type Props = ComponentProps<typeof Home>;

const HomeStory = ({ wrapperProps, ...props }: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Home {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof HomeStory> = HomeStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
