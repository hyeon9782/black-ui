import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";
import { Button } from "@/components/Form";

const meta = {
  title: "Component/Overlay/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {<Story />}
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bottom: Story = {
  args: {
    children: <Button>Tooltip</Button>,
    label: "Tooltip 입니다!",
    bg: "black",
  },
};
