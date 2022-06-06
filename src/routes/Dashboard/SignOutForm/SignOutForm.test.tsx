import { render, screen } from "@testing-library/react";
import { i18text } from "@tests/i18text";
import { mockSessionService } from "@tests/mocks/services";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import { describe, it } from "vitest";
import { SignOutForm } from "./SignOutForm";

type Props = ComponentProps<typeof SignOutForm>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <SignOutForm {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<SignOutForm />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent({
      wrapperProps: { session: mockSessionService("auth") },
    });

    const header = i18text("SignOutForm.button");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
