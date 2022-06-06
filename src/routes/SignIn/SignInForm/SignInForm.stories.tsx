import { ComponentMeta, ComponentStory } from "@storybook/react";
import { mockSessionService } from "@tests/mocks/services";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import { SignInForm } from "./SignInForm";

export default {
  title: "routes/SignIn/SignInForm",
  component: SignInForm,
} as ComponentMeta<typeof SignInForm>;

type Props = ComponentProps<typeof SignInForm>;

const SignInFormStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SignInForm {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SignInFormStory> = SignInFormStory;
export const Playground = Story.bind({});
Playground.args = {
  wrapperProps: {
    session: mockSessionService("anon"),
  },
};
