import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Component/Form/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: { size: "sm", children: "Buttton CI / CD 테스트" },
};

export const Medium: Story = {
  args: { size: "md", children: "Click Me" },
};

export const LargeOnClick: Story = {
  args: {
    size: "lg",
    children: "Click Me",
    onClick: () => alert("Clicked!"),
  },
};

export const Disabled: Story = {
  args: { size: "lg", children: "Click Me", disabled: true },
};
