import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";

const meta = {
  title: "UI/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: { variant: "outline" },
};
