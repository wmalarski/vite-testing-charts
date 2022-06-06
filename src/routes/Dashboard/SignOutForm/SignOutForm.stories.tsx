import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import { SignOutForm } from "./SignOutForm";

export default {
  title: "routes/Dashboard/SignOutForm",
  component: SignOutForm,
} as ComponentMeta<typeof SignOutForm>;

type Props = ComponentProps<typeof SignOutForm>;

const SignOutFormStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <SignOutForm {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof SignOutFormStory> = SignOutFormStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
