import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

const meta = {
  title: "Component/DataDisplay/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: { children: "Tag", variant: "outline" },
};

export const Solid: Story = {
  args: { children: "Tag", variant: "solid" },
};

export const Subtle: Story = {
  args: { children: "Tag", variant: "subtle" },
};
