import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge 컴포넌트 테스트", () => {
  test("Badge 컴포넌트가 렌더링된다.", () => {
    render(<Badge>Badge</Badge>);

    expect(screen.getByText("Badge")).toBeInTheDocument();
  });
});
