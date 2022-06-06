import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import Root from "./Root";

export default {
  title: "routes/Root",
  component: Root,
} as ComponentMeta<typeof Root>;

type Props = ComponentProps<typeof Root>;

const RootStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Root {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof RootStory> = RootStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
