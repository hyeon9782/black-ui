import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card 컴포넌트 테스트", () => {
  test("Card 컴포넌트가 렌더링된다.", () => {
    render(<Card>Card</Card>);

    expect(screen.getByText("Card")).toBeInTheDocument();
  });
});
