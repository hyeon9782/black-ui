import type { Meta, StoryObj } from "@storybook/react";
import Slider from "./Slider";

const meta = {
  title: "Component/Form/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    color: "red",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    color: "black",
    size: "md",
  },
};

export const LargeAndDisabled: Story = {
  args: {
    color: "red",
    size: "lg",
    isDisabled: true,
  },
};
