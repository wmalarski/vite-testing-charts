import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import SignUp from "./SignUp";

export default {
  title: "routes/SignUp",
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

type Props = ComponentProps<typeof SignUp>;

const SignUpStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SignUp {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SignUpStory> = SignUpStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
