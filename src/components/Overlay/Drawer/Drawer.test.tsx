import { render, screen } from "@testing-library/react";
import Drawer from "./Drawer";
import DrawerOverlay from "./DrawerOverlay";
import DrawerContent from "./DrawerContent";
import DrawerCloseButton from "./DrawerCloseButton";
import DrawerBody from "./DrawerBody";
import DrawerHeader from "./DrawerHeader";
import DrawerFooter from "./DrawerFooter";

describe("Drawer 컴포넌트 테스트", () => {
  const Component = (props: any) => {
    return (
      <Drawer {...props}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Header</DrawerHeader>
          <DrawerBody>Body</DrawerBody>
          <DrawerFooter>Footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  };
  test("Drawer 컴포넌트가 렌더링된다.", () => {
    render(<Component data-testid="drawer" />);
    expect(screen.getByTestId("drawer")).toBeInTheDocument();
  });
});
