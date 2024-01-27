import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";
import { IoMdStar } from "react-icons/io";

const meta = {
  title: "Component/Form/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { icon: <IoMdStar /> },
};

export const Loading: Story = {
  args: { icon: <IoMdStar />, isLoading: true },
};
