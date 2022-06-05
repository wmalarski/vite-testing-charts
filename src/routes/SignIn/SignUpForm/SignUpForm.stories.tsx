import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import { SignUpForm } from "./SignUpForm";

export default {
  title: "routes/SignIn/SignUpForm",
  component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

type Props = ComponentProps<typeof SignUpForm>;

const SignUpFormStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SignUpForm {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SignUpFormStory> = SignUpFormStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
