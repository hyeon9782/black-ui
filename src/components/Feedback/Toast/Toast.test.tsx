import { Button } from "@/components/Form";
import ToastProvider from "./ToastProvider";

import { render, screen } from "@testing-library/react";
import useToast from "./useToast";

describe("Toast 컴포넌트 테스트", () => {
  const Component = (args: any) => {
    const { openToast } = useToast();
    return (
      <ToastProvider>
        <Button
          onClick={() =>
            openToast({
              ...args,
            })
          }
        >
          Toast
        </Button>
      </ToastProvider>
    );
  };
  test("Toast 컴포넌트가 렌더링된다.", () => {
    render(<Component />);

    expect(screen.getByText("Toast")).toBeInTheDocument();
  });
});
