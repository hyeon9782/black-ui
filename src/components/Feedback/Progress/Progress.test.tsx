import { render, screen } from "@testing-library/react";
import Progress from "./Progress";

describe("Progress 컴포넌트 테스트", () => {
  test("Progress 컴포넌트가 렌더링된다.", () => {
    render(<Progress value={90} data-testid="progress" />);

    expect(screen.getByTestId("progress")).toBeInTheDocument();
  });
});
