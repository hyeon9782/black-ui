// Button.test.tsx

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";

describe("Button 컴포넌트 테스트", () => {
  afterEach(() => cleanup());

  it("Button 컴포넌트가 정상적으로 렌더링된다.", () => {
    render(<Button data-testid="btn">Button</Button>);
    const button = screen.getByTestId("btn");

    expect(button).toBeInTheDocument();
  });

  it("onClick 이벤트가 정상적으로 트리거된다.", () => {
    const fn = jest.fn();
    render(
      <Button onClick={fn} data-testid="btn">
        Button
      </Button>,
    );

    const button = screen.getByTestId("btn");
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });

  test("icons와 함께 렌더링되어야 한다.", () => {
    render(
      <>
        <Button leftIcon={<IoMdClose />}>Left Icon</Button>
        <Button rightIcon={<IoMdClose />}>Right Icon</Button>
      </>,
    );
    expect(screen.getByText("Left Icon")).toBeTruthy();
    expect(screen.getByText("Right Icon")).toBeTruthy();
  });

  test("loadingText가 렌더링된다.", () => {
    render(
      <Button isLoading loadingText="loading...">
        Spinner
      </Button>,
    );
    expect(screen.getByText("loading...")).toBeDisabled();
  });

  test("Spinner가 렌더링된다.", () => {
    render(
      <Button isLoading data-testid="loading">
        Spinner
      </Button>,
    );
    expect(screen.getByTestId("loading")).toBeDisabled();
  });

  test("비활성화 된다.", () => {
    render(<Button isDisabled>Disabled</Button>);
    expect(screen.getByText("Disabled")).toBeDisabled();
  });

  test("aria 속성이 정상적으로 적용된다.", () => {
    render(<Button>Aria Button</Button>);
    expect(screen.getByText("Aria Button")).not.toHaveAttribute(
      "aria-disabled",
    );

    render(
      <Button isLoading data-testId="loading-button">
        Loading Button
      </Button>,
    );
    expect(screen.getByTestId("loading-button")).toHaveAttribute(
      "aria-disabled",
    );

    render(
      <Button isDisabled data-testId="disabled-button">
        Disabled Button
      </Button>,
    );
    expect(screen.getByTestId("disabled-button")).toHaveAttribute(
      "aria-disabled",
    );
  });
});
