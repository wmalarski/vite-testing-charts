import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { PropsWithTestWrapper, TestWrapper } from "@tests/TestWrapper";
import { VersionLabel } from "./VersionLabel";

const renderComponent = ({ wrapperProps }: PropsWithTestWrapper = {}) => {
  return render(
    <TestWrapper {...wrapperProps}>
      <VersionLabel />
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
