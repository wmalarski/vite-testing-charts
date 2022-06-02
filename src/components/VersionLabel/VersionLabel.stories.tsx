import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import { VersionLabel } from "./VersionLabel";

export default {
  title: "components/VersionLabel",
  component: VersionLabel,
} as ComponentMeta<typeof VersionLabel>;

type Props = ComponentProps<typeof VersionLabel>;

const VersionLabelStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <VersionLabel {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof VersionLabelStory> = VersionLabelStory;
export const Playground = Story.bind({});
Playground.args = { wrapperProps: {} };
