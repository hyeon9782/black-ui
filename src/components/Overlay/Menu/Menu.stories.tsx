import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";
import MenuList from "./MenuList";

const meta = {
  title: "Component/Overlay/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    componentSubtitle: "Menu 컴포넌트입니다.",
    docs: {
      description: {
        component: "숨겨진 Menu 컴포넌트를 구현할 때 사용합니다.",
      },
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    children: <></>,
  },
  render: function Render() {
    return (
      <>
        <Menu>
          <MenuButton>Menu 나와라!</MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => {
                alert("다운로드!");
              }}
            >
              Download
            </MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </>
    );
  },
};
