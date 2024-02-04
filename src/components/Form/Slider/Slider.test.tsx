import { render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider 컴포넌트 테스트", () => {
  test("Slider 컴포넌트가 렌더링된다.", () => {
    render(<Slider data-testid="slider" />);
    expect(screen.getByTestId("slider")).toBeInTheDocument();
  });
});
