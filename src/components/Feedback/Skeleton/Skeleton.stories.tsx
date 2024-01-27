import type { Meta, StoryObj } from "@storybook/react";
import Skeleton from "./Skeleton";

const meta = {
  title: "Component/Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    width: "300px",
    height: "100px",
    radius: "15px",
    background: "lightgray",
  },
};
