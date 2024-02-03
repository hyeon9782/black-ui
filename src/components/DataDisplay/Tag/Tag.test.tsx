import { render, screen } from "@testing-library/react";
import Tag from "./Tag";

describe("Tag 컴포넌트 테스트", () => {
  test("Tag 컴포넌트가 렌더링된다.", () => {
    render(<Tag>Tag</Tag>);

    expect(screen.getByText("Tag")).toBeInTheDocument();
  });
});
