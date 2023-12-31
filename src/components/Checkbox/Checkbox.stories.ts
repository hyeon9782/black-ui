import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: { variant: "primary", children: "Click Me" },
};

export const Outline: Story = {
  args: { variant: "primary", children: "Click Me" },
};
