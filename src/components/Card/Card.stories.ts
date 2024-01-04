import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: { variant: "outline" },
};
