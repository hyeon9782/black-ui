import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta = {
  title: "Component/Form/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    size: "lg",
    variant: "outline",
    label: "과일을 선택 해주세요.",
    options: ["딸기", "바나나", "포도"],
  },
};

export const Filled: Story = {
  args: {
    size: "lg",
    variant: "filled",
    label: "과일을 선택 해주세요.",
    options: ["딸기", "바나나", "포도"],
  },
};

export const Unstyled: Story = {
  args: {
    size: "lg",
    variant: "unstyled",
    label: "과일을 선택 해주세요.",
    options: ["딸기", "바나나", "포도"],
  },
};

export const Flushed: Story = {
  args: {
    size: "lg",
    variant: "flushed",
    label: "과일을 선택 해주세요..",
    options: ["딸기", "바나나", "포도"],
  },
};
