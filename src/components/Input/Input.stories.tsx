import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: { variant: "primary", children: "Click Me" },
};

export const Outline: Story = {
  args: { variant: "secondary", children: "Click Me" },
};
