import { render, screen } from "@testing-library/react";
import Tooltip from "./Tooltip";
import { Button } from "@/components/Form";

describe("Tooltip 컴포넌트 테스트", () => {
  test("Tooltip 컴포넌트가 렌더링된다.", () => {
    render(
      <Tooltip label="Hover me">
        <Button>Tooltip 나와라!</Button>
      </Tooltip>,
    );

    expect(screen.getByText("Tooltip 나와라!")).toBeInTheDocument();
  });
});
