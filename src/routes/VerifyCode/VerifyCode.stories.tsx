import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import VerifyCode from "./VerifyCode";

export default {
  title: "routes/VerifyCode",
  component: VerifyCode,
} as ComponentMeta<typeof VerifyCode>;

type Props = ComponentProps<typeof VerifyCode>;

const VerifyCodeStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <VerifyCode {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof VerifyCodeStory> = VerifyCodeStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
