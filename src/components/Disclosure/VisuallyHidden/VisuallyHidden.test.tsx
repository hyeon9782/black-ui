import { render, screen } from "@testing-library/react";
import { VisuallyHidden, VisuallyHiddenInput } from "./VisuallyHidden";

describe("VisuallyHidden 컴포넌트 테스트", () => {
  test("VisuallyHidden 컴포넌트가 렌더링된다.", () => {
    render(<VisuallyHidden data-testid="hidden" />);

    expect(screen.getByTestId("hidden")).toBeInTheDocument();
  });

  test("VisuallyHiddenInput 컴포넌트가 렌더링된다.", () => {
    render(<VisuallyHiddenInput data-testid="hidden" />);

    expect(screen.getByTestId("hidden")).toBeInTheDocument();
  });
});
