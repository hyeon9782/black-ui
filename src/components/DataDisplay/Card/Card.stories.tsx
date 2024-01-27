import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
  title: "Component/DataDisplay/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: { children: "Card", variant: "outline" },
};

export const Filled: Story = {
  args: { children: "Card", variant: "filled" },
};

export const Unstyled: Story = {
  args: { children: "Card", variant: "unstyled" },
};

export const Elevated: Story = {
  args: { children: "Card", variant: "elevated" },
};
