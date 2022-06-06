import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { i18text } from "@tests/i18text";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
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

    renderComponent();

    const header = i18text("SignOutForm");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});