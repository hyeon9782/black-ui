import { render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Checkbox 컴포넌트 테스트", () => {
  test("Checkbox 컴포넌트가 렌더링된다.", () => {
    render(<Checkbox>빨강</Checkbox>);
    expect(screen.getByLabelText("빨강")).toBeInTheDocument();
  });

  // test("비제어 컴포넌트: 체크 또는 비체크", () => {
  //   render(<Checkbox>빨강</Checkbox>);
  //   const chekbox = screen.getByLabelText("빨강");

  //   fireEvent.click(chekbox);

  //   expect(screen.getByLabelText("빨강")).toBeChecked();
  // });

  // test("제어 컴포넌트: 체크 또는 비체크", () => {
  //   const [isChecked, setIsChecked] = useState(false);

  //   render(
  //     <Checkbox isChecked={isChecked} onChange={() => setIsChecked(!isChecked)}>
  //       빨강
  //     </Checkbox>,
  //   );
  //   const chekbox = screen.getByLabelText("빨강");

  //   fireEvent.click(chekbox);

  //   expect(screen.getByLabelText("빨강")).toBeChecked();
  // });
});
