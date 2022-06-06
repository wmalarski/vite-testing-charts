import { render, screen } from "@testing-library/react";
import { i18text } from "@tests/i18text";
import { mockSessionService } from "@tests/mocks/services";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import { describe, it } from "vitest";
import Root from "./Root";

type Props = ComponentProps<typeof Root>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <Root {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<Root />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent({
      wrapperProps: { session: mockSessionService("loading") },
    });

    const label = i18text("Root.Loading");

    await expect(screen.findByText(label)).resolves.toBeInTheDocument();
  });
});
