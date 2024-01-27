import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";

const meta = {
  title: "Component/Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: { size: "sm", placeholder: "입력해주세요" },
};

export const Medium: Story = {
  args: { size: "md", placeholder: "입력해주세요" },
};
export const LargeOnDisabled: Story = {
  args: { size: "lg", placeholder: "입력해주세요", disabled: true },
};
