import { render, screen } from "@testing-library/react";
import Popover from "./Popover";
import PopoverTrigger from "./PopoverTrigger";
import { Button } from "@/components/Form";
import PopoverContent from "./PopoverContent";
import PopoverCloseButton from "./PopoverCloseButton";
import PopoverArrow from "./PopoverArrow";

describe("Popover 컴포넌트 테스트", () => {
  const Component = (props: any) => {
    return (
      <Popover {...props}>
        <PopoverTrigger>
          <Button>Popover 나와라!</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <div>Popover입니다!!</div>
        </PopoverContent>
      </Popover>
    );
  };
  test("Popover 컴포넌트가 렌더링된다.", () => {
    render(<Component data-testid="popover" />);
    expect(screen.getByTestId("popover")).toBeInTheDocument();
  });
});
