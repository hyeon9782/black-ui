import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";
import MenuList from "./MenuList";

describe("Menu 컴포넌트 테스트", () => {
  const Component = (props: any, onClick: () => void) => {
    return (
      <Menu {...props}>
        <MenuButton>Menu 나와라!</MenuButton>
        <MenuList data-testid="menu-list">
          <MenuItem onClick={onClick}>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    );
  };

  test("Menu 컴포넌트가 렌더링된다.", () => {
    render(<Component data-testid="menu" />);
    expect(screen.getByTestId("menu")).toBeInTheDocument();
  });

  test("MenuButton을 클릭하면 MenuList가 열리고 닫힌다.", async () => {
    render(<Component />);

    const button = screen.getByText("Menu 나와라!");
    const list = screen.getByTestId("menu-list");

    expect(list).not.toBeVisible();

    fireEvent.click(button);

    await waitFor(() => expect(list).toBeVisible());

    fireEvent.click(button);

    await waitFor(() => expect(list).not.toBeVisible());
  });

  // test("Menu 컴포넌트에 isLazy를 전달하면 MenuList가 렌더링되지 않는다.", () => {});

  // test("MenuItem에 disabled를 전달하면 선택이 되지 않는다.", () => {});
});
