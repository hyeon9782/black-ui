import { render, screen } from "@testing-library/react";
import List from "./List";
import { IoMdSettings } from "react-icons/io";
import ListItem from "./ListItem";
import ListIcon from "./ListIcon";

describe("List 컴포넌트 테스트", () => {
  test("List 컴포넌트가 렌더링된다.", () => {
    render(
      <List data-testid="List" space="md" direction="column">
        <ListItem>
          <ListIcon as={<IoMdSettings />} color="green" />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </ListItem>
        <ListItem>
          <ListIcon as={<IoMdSettings />} color="green" />
          Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
        <ListItem>
          <ListIcon as={<IoMdSettings />} color="green" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
      </List>,
    );

    expect(screen.getByTestId("List")).toBeInTheDocument();
  });
});
