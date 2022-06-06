import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { i18text } from "@tests/i18text";
import { mockSessionService } from "@tests/mocks/services";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import { describe, it } from "vitest";
import NotFound from "./NotFound";

type Props = ComponentProps<typeof NotFound>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <NotFound {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<NotFound />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent({
      wrapperProps: { session: mockSessionService("auth") },
    });

    const header = i18text("NotFound.NotFound");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
