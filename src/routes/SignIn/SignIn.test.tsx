import { render, screen } from "@testing-library/react";
import { i18text } from "@tests/i18text";
import { mockSessionService } from "@tests/mocks/services";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import { describe, it } from "vitest";
import SignIn from "./SignIn";

type Props = ComponentProps<typeof SignIn>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <SignIn {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<SignIn />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent({
      wrapperProps: { session: mockSessionService("anon") },
    });

    const header = i18text("SignInForm.button");
    await expect(screen.findByText(header)).resolves.toBeInTheDocument();
  });
});
