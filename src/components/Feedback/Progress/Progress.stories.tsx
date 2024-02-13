import type { Meta, StoryObj } from "@storybook/react";
import Progress from "./Progress";

const meta = {
  title: "Component/Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: {
    size: "sm",
    color: "blue",
    value: 30,
  },
};

export const Green: Story = {
  args: {
    size: "md",
    color: "green",
    value: 60,
  },
};

export const Red: Story = {
  args: {
    size: "lg",
    color: "red",
    value: 90,
  },
};
