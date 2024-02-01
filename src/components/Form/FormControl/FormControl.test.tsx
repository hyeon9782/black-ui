import { render, screen } from "@testing-library/react";
import FormControl from "./FormControl";
import FormLabel from "./FormLabel";
import { Input } from "../Input";

describe("FormControl 컴포넌트 테스트", () => {
  test("FormControl이 정상적으로 렌더링되는지 테스트", () => {
    render(
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input />
      </FormControl>,
    );
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
