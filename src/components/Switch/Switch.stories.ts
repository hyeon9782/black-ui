import type { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

const meta = {
  title: "UI/Select",
  component: Switch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: { variant: "outline" },
};
