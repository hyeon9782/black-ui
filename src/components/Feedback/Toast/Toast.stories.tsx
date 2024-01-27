import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";

const meta = {
  title: "Component/Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    title: "Toast입니다!",
    description: "Toast 설명입니다!",
    status: "success",
  },
};
