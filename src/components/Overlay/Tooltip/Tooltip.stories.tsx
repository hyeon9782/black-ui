import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";
import { Button } from "@/components/Form";
import TooltipTrigger from "./TooltipTrigger";
import TooltipContent from "./TooltipContent";

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

const Component = (args: any) => {
  return (
    <Tooltip {...args}>
      <TooltipTrigger>
        <Button>Tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip 입니다.</p>
      </TooltipContent>
    </Tooltip>
  );
};

export const Bottom: Story = {
  args: {
    bg: "black",
  },
  render: Component,
};
