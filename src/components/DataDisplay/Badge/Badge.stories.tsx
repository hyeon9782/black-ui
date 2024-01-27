import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta = {
  title: "Component/DataDisplay/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: { children: "Badge", variant: "outline" },
};

export const Solid: Story = {
  args: { children: "Badge", variant: "solid" },
};

export const Subtle: Story = {
  args: { children: "Badge", variant: "subtle" },
};
