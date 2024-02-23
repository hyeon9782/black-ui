import { render, screen } from "@testing-library/react";
import Tooltip from "./Tooltip";
import { Button } from "@/components/Form";
import TooltipTrigger from "./TooltipTrigger";
import TooltipContent from "./TooltipContent";

describe("Tooltip 컴포넌트 테스트", () => {
  const Component = (args: any) => {
    return (
      <Tooltip {...args}>
        <TooltipTrigger>
          <Button>Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tooltip 입니다.</p>
        </TooltipContent>
      </Tooltip>
    );
  };

  test("Tooltip 컴포넌트가 렌더링된다.", () => {
    render(<Component />);

    expect(screen.getByText("Tooltip 나와라!")).toBeInTheDocument();
  });
});
