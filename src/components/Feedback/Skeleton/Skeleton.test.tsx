import { render, screen } from "@testing-library/react";
import Skeleton from "./Skeleton";

describe("Skeleton 컴포넌트 테스트", () => {
  test("Skeleton 컴포넌트가 렌더링된다.", () => {
    render(
      <Skeleton
        width="500px"
        height="200px"
        radius="5px"
        background="lightgray"
        data-testid="skeleton"
      >
        <Skeleton width="400px" height="50px" radius="5px" background="gray" />
        <Skeleton width="400px" height="50px" radius="5px" background="gray" />
        <Skeleton width="400px" height="50px" radius="5px" background="gray" />
      </Skeleton>,
    );

    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });
});
