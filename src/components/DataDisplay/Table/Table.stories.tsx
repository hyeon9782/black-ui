import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

const meta = {
  title: "Component/DataDisplay/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: { children: "Card", variant: "filled" },
};

export const Simple: Story = {
  args: { children: "Card", variant: "simple" },
};

export const Unstyled: Story = {
  args: { children: "Card", variant: "unstyled" },
};
