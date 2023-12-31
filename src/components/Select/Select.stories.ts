import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: { variant: "outline" },
};
