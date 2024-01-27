import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "Component/Form/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    size: "lg",
    variant: "outline",
    placeholder: "아이디를 입력해주세요.",
  },
};

export const Filled: Story = {
  args: {
    size: "lg",
    variant: "filled",
    placeholder: "아이디를 입력해주세요.",
  },
};

export const Flushed: Story = {
  args: {
    size: "lg",
    variant: "flushed",
    placeholder: "아이디를 입력해주세요.",
  },
};

export const Unstyled: Story = {
  args: {
    size: "lg",
    variant: "unstyled",
    placeholder: "아이디를 입력해주세요.",
  },
};
