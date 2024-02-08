import { fireEvent, render, screen } from "@testing-library/react";
import CloseButton from "./CloseButton";

describe("CloseButton 컴포넌트 테스트", () => {
  test("CloseButton 컴포넌트가 렌더링된다.", () => {
    render(<CloseButton data-testid="close-button" />);

    expect(screen.getByTestId("close-button")).toBeInTheDocument();
  });

  test("CloseButton 컴포넌트를 클릭하면 onClick 함수가 실행된다.", () => {
    const fn = jest.fn();

    render(<CloseButton data-testid="close-button" onClose={fn} />);

    const button = screen.getByTestId("close-button");

    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });
});
