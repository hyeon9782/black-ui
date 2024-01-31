import { render, screen } from "@testing-library/react";
import Switch from "./Switch";

describe("Switch Tests", () => {
  test("Switch 컴포넌트가 정상적으로 렌더링됩니다.", () => {
    render(<Switch>빨강</Switch>);

    const red = screen.getByText("빨강");

    expect(red).toBeInTheDocument();
  });
});
