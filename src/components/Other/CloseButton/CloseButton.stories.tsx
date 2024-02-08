import type { Meta, StoryObj } from "@storybook/react";
import CloseButton from "./CloseButton";
import { IoMdSettings } from "react-icons/io";

const meta = {
  title: "Component/Other/CloseButton",
  component: CloseButton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { size: "md", onClose: () => alert("Close!") },
};

export const Custom: Story = {
  args: { size: "md", icon: <IoMdSettings />, onClose: () => alert("Close!") },
};
