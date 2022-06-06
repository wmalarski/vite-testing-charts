import { render, screen } from "@testing-library/react";
import { i18text } from "@tests/i18text";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import { describe, it } from "vitest";
import { SignInForm } from "./SignInForm";

type Props = ComponentProps<typeof SignInForm>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <SignInForm {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<SignInForm />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("SignInForm");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
