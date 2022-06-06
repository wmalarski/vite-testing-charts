import { ComponentMeta, ComponentStory } from "@storybook/react";
import { mockSessionService } from "@tests/mocks/services";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import NotFound from "./NotFound";

export default {
  title: "routes/NotFound",
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

type Props = ComponentProps<typeof NotFound>;

const NotFoundStory = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Props>) => {
  return (
    <TestWrapper {...wrapperProps}>
      <NotFound {...props} />
    </TestWrapper>
  );
};

const Story: ComponentStory<typeof NotFoundStory> = NotFoundStory;
export const Playground = Story.bind({});
Playground.args = {
  wrapperProps: {
    session: mockSessionService("auth"),
  },
};
