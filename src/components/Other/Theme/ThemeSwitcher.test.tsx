import { render, screen } from "@testing-library/react";
import ThemeSwitcher from "./ThemeSwitcher";

describe("ThemeSwitcher 컴포넌트 테스트", () => {
  test("ThemeSwitcher 컴포넌트가 렌더링된다.", () => {
    render(<ThemeSwitcher data-testid="switcher" />);

    expect(screen.getByTestId("switcher")).toBeInTheDocument();
  });
});
