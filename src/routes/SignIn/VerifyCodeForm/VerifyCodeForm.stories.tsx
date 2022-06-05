import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import { VerifyCodeForm } from "./VerifyCodeForm";

export default {
  title: "routes/SignIn/VerifyCodeForm",
  component: VerifyCodeForm,
} as ComponentMeta<typeof VerifyCodeForm>;

type Props = ComponentProps<typeof VerifyCodeForm>;

const VerifyCodeFormStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <VerifyCodeForm {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof VerifyCodeFormStory> = VerifyCodeFormStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
