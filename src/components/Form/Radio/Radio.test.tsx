import { render, screen } from "@testing-library/react";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";

describe("Radio 컴포넌트 테스트", () => {
  test("Radio 컴포넌트가 렌더링된다.", () => {
    render(
      <RadioGroup>
        <Radio>빨강</Radio>
        <Radio>파랑</Radio>
      </RadioGroup>,
    );

    expect(screen.getByLabelText("빨강"));
    expect(screen.getByLabelText("파랑"));
  });
});
