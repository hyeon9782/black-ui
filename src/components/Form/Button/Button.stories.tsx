import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { IoMdSettings } from "react-icons/io";

const meta = {
  title: "Component/Form/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: { size: "md", children: "Click Me", variant: "outline" },
};

export const Solid: Story = {
  args: { size: "md", children: "Click Me", variant: "solid" },
};

export const Ghost: Story = {
  args: {
    size: "md",
    children: "Click Me",
    variant: "ghost",
    onClick: () => alert("Clicked!"),
  },
};

export const LeftIcon: Story = {
  args: { size: "md", children: "Click Me", leftIcon: <IoMdSettings /> },
};

export const RightIcon: Story = {
  args: { size: "md", children: "Click Me", rightIcon: <IoMdSettings /> },
};

export const Disabled: Story = {
  args: { size: "md", children: "Click Me", isDisabled: true },
};

export const Loading: Story = {
  args: { size: "md", children: "Click Me", isLoading: true },
};

export const LoadingText: Story = {
  args: {
    size: "md",
    children: "Click Me",
    isLoading: true,
    loadingText: "Loading",
  },
};
