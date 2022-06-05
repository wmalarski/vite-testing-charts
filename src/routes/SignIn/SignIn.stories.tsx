import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import SignIn from "./SignIn";

export default {
  title: "routes/SignIn",
  component: SignIn,
} as ComponentMeta<typeof SignIn>;

type Props = ComponentProps<typeof SignIn>;

const SignInStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SignIn {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SignInStory> = SignInStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
