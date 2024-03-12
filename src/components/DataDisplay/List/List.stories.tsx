import type { Meta, StoryObj } from "@storybook/react";
import List from "./List";
import ListItem from "./ListItem";
import ListIcon from "./ListIcon";
import { IoMdSettings } from "react-icons/io";
import { ListVariants } from "./List.css";

const meta = {
  title: "Component/DataDisplay/List",
  component: List,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const Component = (args: ListVariants) => {
  return (
    <List {...args}>
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
    </List>
  );
};

export const Column: Story = {
  args: {
    space: "md",
    direction: "column",
  },
  render: Component,
};

export const Row: Story = {
  args: {
    space: "md",
    direction: "row",
  },
  render: Component,
};
