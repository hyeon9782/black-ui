import { render, screen } from "@testing-library/react";
import Text from "./Text";

const Component = (args: any) => {
  return (
    <>
      <Text fontSize="6xl">6xl</Text>
      <Text fontSize="5xl">5xl</Text>
      <Text fontSize="4xl">4xl</Text>
      <Text fontSize="3xl">3xl</Text>
      <Text fontSize="2xl">2xl</Text>
      <Text fontSize="xl">xl</Text>
      <Text fontSize="lg">lg</Text>
      <Text fontSize="md">md</Text>
      <Text fontSize="sm">sm</Text>
      <Text fontSize="xs">xs</Text>
    </>
  );
};

describe("Text 컴포넌트 테스트", () => {
  test("Text 컴포넌트가 렌더링된다.", () => {
    render(<Component />);
    expect(screen.getByText("6xl")).toBeInTheDocument();
    
  });
});
