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

export const Red: Story = {
  args: {
    color: "red",
  },
};
