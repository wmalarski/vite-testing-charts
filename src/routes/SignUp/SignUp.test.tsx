import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { i18text } from "@tests/i18text";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import SignUp from "./SignUp";

type Props = ComponentProps<typeof SignUp>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <SignUp {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<SignUp />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    const header = i18text("SignUp");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
