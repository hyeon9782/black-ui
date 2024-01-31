import { render, screen } from "@testing-library/react";
import Textarea from "./Textarea";

describe("Textarea Tests", () => {
  test("Textarea 컴포넌트가 정상적으로 렌더링됩니다.", () => {
    render(<Textarea placeholder="설명을 적어주세요."></Textarea>);

    const textarea = screen.getByPlaceholderText("설명을 적어주세요.");

    expect(textarea).toBeInTheDocument();
  });
});
