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

export const Small: Story = {
  args: { size: "sm", src: "/이력서 사진.jpg", name: "JeongHo" },
};

export const Medium: Story = {
  args: { size: "md", src: "/이력서 사진.jpg", name: "JeongHo" },
};

export const Error: Story = {
  args: { size: "lg", src: "/이력서 사진!.jpg", name: "JeongHo" },
};
