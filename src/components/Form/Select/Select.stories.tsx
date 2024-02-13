import type { Meta, StoryObj } from "@storybook/react";
import Select, { SelectProps } from "./Select";
import { useState } from "react";

const meta = {
  title: "Component/Form/Select",
  component: Select,
  tags: ["autodocs"],
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
  render: function Render(args: SelectProps) {
    const [selectedItem, setSelectedItem] = useState("");
    const onSelect = (value: string) => {
      setSelectedItem(value);
    };

    return <Select {...args} selectedItem={selectedItem} onSelect={onSelect} />;
  },
};

export const Filled: Story = {
  args: {
    size: "lg",
    variant: "filled",
    label: "과일을 선택 해주세요.",
    options: ["딸기", "바나나", "포도"],
  },
  render: function Render(args: SelectProps) {
    const [selectedItem, setSelectedItem] = useState("");
    const onSelect = (value: string) => {
      setSelectedItem(value);
    };

    return <Select {...args} selectedItem={selectedItem} onSelect={onSelect} />;
  },
};

export const Unstyled: Story = {
  args: {
    size: "lg",
    variant: "unstyled",
    label: "과일을 선택 해주세요.",
    options: ["딸기", "바나나", "포도"],
  },
  render: function Render(args: SelectProps) {
    const [selectedItem, setSelectedItem] = useState("");
    const onSelect = (value: string) => {
      setSelectedItem(value);
    };

    return <Select {...args} selectedItem={selectedItem} onSelect={onSelect} />;
  },
};

export const Flushed: Story = {
  args: {
    size: "lg",
    variant: "flushed",
    label: "과일을 선택 해주세요..",
    options: ["딸기", "바나나", "포도"],
  },
  render: function Render(args: SelectProps) {
    const [selectedItem, setSelectedItem] = useState("");
    const onSelect = (value: string) => {
      setSelectedItem(value);
    };

    return <Select {...args} selectedItem={selectedItem} onSelect={onSelect} />;
  },
};
