import { render, screen } from "@testing-library/react";
import Select from "./Select";

describe("Select 컴포넌트 테스트", () => {
  test("Select 컴포넌트가 렌더링된다.", () => {
    render(
      <Select
        options={["딸기", "포도", "바나나"]}
        label="과일을 선택해주세요"
      />,
    );

    expect(screen.getByText("과일을 선택해주세요")).toBeInTheDocument();
  });
});
