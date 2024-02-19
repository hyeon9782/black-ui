import type { Meta, StoryObj } from "@storybook/react";
import Popover from "./Popover";
import PopoverCloseButton from "./PopoverCloseButton";
import PopoverContent from "./PopoverContent";
import PopoverTrigger from "./PopoverTrigger";

import { Button } from "@/components/Form";
import PopoverArrow from "./PopoverArrow";

const meta = {
  title: "Component/Overlay/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    componentSubtitle: "Popover 컴포넌트입니다.",
    docs: {
      description: {
        component: "Popover를 구현할 때 사용합니다.",
      },
    },
  },
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
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bottom: Story = {
  args: {
    children: <></>,
  },
  render: function Render(args) {
    return (
      <Popover {...args}>
        <PopoverTrigger>
          <Button>Popover 나와라!</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <div>Popover입니다!!</div>
        </PopoverContent>
      </Popover>
    );
  },
};
