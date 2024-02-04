import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PinInput from "./PinInput";
import PinInputField from "./PinInputField";

describe("PinInput 컴포넌트 테스트", () => {
  const Component = (props: any) => {
    return (
      <PinInput {...props}>
        <PinInputField data-testid="1" />
        <PinInputField data-testid="2" />
        <PinInputField data-testid="3" />
        <PinInputField data-testid="4" />
      </PinInput>
    );
  };

  test("PinInput 테스트가 렌더링된다.", () => {
    render(<Component data-testid="pin-input" />);

    expect(screen.getByTestId("pin-input")).toBeInTheDocument();
  });

  test("컴포넌트가 렌더링되면 첫 번째 필드에 자동으로 focus된다.", () => {
    render(<Component />);

    expect(screen.getByTestId("1")).toHaveFocus();
  });

  test("input에 타이핑을하면 자동으로 다음 input으로 focus가 이동한다.", async () => {
    render(<Component />);

    await fireEvent.change(screen.getByTestId("1"), { target: { value: "1" } });

    await fireEvent.change(screen.getByTestId("2"), { target: { value: "2" } });

    await waitFor(() => expect(screen.getByTestId("3")).toHaveFocus());
  });

  test("backspace를 누르면 값을 지우고 이전 input으로 focus가 이동한다.", async () => {
    render(<Component />);

    await fireEvent.change(screen.getByTestId("1"), { target: { value: "1" } });

    await fireEvent.change(screen.getByTestId("2"), { target: { value: "2" } });

    await fireEvent.keyDown(screen.getByTestId("2"), { key: "Backspace" });

    await waitFor(() => expect(screen.getByTestId("1")).toHaveFocus());
  });

  test("모든 input이 채워지면 complate callback이 호출된다.", async () => {
    const fn = jest.fn();

    render(<Component onComplate={fn} />);

    await fireEvent.change(screen.getByTestId("1"), { target: { value: "1" } });

    await fireEvent.change(screen.getByTestId("2"), { target: { value: "2" } });

    await fireEvent.change(screen.getByTestId("3"), { target: { value: "3" } });

    await fireEvent.change(screen.getByTestId("4"), { target: { value: "4" } });

    expect(fn).toHaveBeenCalled();
  });

  test("otp props를 전달하면 feilds의 autocomplate 속성이 'one-time-code'로 지정된다.", () => {
    render(<Component otp />);

    expect(screen.getByTestId("1")).toHaveAttribute(
      "autocomplete",
      "one-time-code",
    );
    expect(screen.getByTestId("2")).toHaveAttribute(
      "autocomplete",
      "one-time-code",
    );
    expect(screen.getByTestId("3")).toHaveAttribute(
      "autocomplete",
      "one-time-code",
    );
  });
});
