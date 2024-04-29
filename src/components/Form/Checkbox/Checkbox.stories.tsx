import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta = {
  title: "Component/Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: { size: "sm", children: "Check Me" },
};

export const Medium: Story = {
  args: { size: "md", children: "Check Me" },
};

export const LargeOnClick: Story = {
  args: {
    size: "lg",
    children: "Check Me",
    onClick: () => alert("Clicked!"),
  },
};

export const Disabled: Story = {
  args: { size: "lg", children: "Check Me", isDisabled: true },
};
