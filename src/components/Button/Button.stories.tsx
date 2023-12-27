import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary", children: "Click Me" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Click Me" },
};

export const WithOnClick: Story = {
  args: {
    variant: "primary",
    children: "Click Me",
    onClick: () => alert("Clicked!"),
  },
};

export const Disabled: Story = {
  args: { variant: "primary", children: "Click Me", disabled: true },
};
