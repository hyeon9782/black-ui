import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";

const meta = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: { variant: "outline" },
};
