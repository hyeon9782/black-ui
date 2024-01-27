import type { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

const meta = {
  title: "Component/Form/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: { size: "sm", children: "Switch 빨강", color: "red" },
};

export const Medium: Story = {
  args: { size: "md", children: "Switch 초록", color: "green" },
};

export const Large: Story = {
  args: { size: "lg", children: "Switch 파랑", color: "blue" },
};
