import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input 컴포넌트 테스트", () => {
  test("Input 컴포넌트가 렌더링된다.", () => {
    render(<Input placeholder="아이디를 입력해주세요." />);
    expect(
      screen.getByPlaceholderText("아이디를 입력해주세요."),
    ).toBeInTheDocument();
  });

  test("disabled된 Input 컴포넌트가 렌더링된다.", () => {
    render(<Input placeholder="아이디를 입력해주세요." isDisabled />);
    expect(
      screen.getByPlaceholderText("아이디를 입력해주세요."),
    ).toHaveAttribute("disabled");
  });

  test("readony인 Input 컴포넌트가 렌더링된다.", () => {
    render(<Input placeholder="아이디를 입력해주세요." isReadOnly />);
    expect(
      screen.getByPlaceholderText("아이디를 입력해주세요."),
    ).toHaveAttribute("readOnly");
  });
});
