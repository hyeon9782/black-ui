import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta = {
  title: "Component/DataDisplay/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { size: "md", src: "/이력서 사진.jpg", name: "Jeong Ho" },
};

export const Fallback: Story = {
  args: { size: "md", src: "/이력서 사진!.jpg" },
};

export const Error: Story = {
  args: { size: "md", src: "/이력서 사진!.jpg", name: "Jeong Ho" },
};
