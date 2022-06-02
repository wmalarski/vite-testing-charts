import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { ComponentProps } from "react";
import { VersionLabel } from "./VersionLabel";

type Props = ComponentProps<typeof VersionLabel>;

const renderComponent = ({
  wrapperProps,
  ...props
}: PropsWithTestWrapper<Partial<Props>> = {}) => {
  const defaultProps: Props = {};

  return render(
    <TestWrapper {...wrapperProps}>
      <VersionLabel {...defaultProps} {...props} />
    </TestWrapper>
  );
};

describe("<VersionLabel />", () => {
  it("should render", () => {
    expect.hasAssertions();

    const view = renderComponent();

    expect(view).toBeDefined();
  });
});
