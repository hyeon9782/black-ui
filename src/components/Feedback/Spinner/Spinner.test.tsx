import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner 컴포넌트 테스트", () => {
  test("Spinner 컴포넌트가 렌더링된다.", () => {
    render(<Spinner data-testid="spinner" />);

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
