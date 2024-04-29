import { render, screen } from "@testing-library/react";
import CustomSlider from "./CustomSlider";

describe("CustomSlider 컴포넌트 테스트", () => {
  test("CustomSlider 컴포넌트가 렌더링된다.", () => {
    render(<CustomSlider data-testid="slider" />);
    expect(screen.getByTestId("slider")).toBeInTheDocument();
  });
});
