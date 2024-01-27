import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";

const meta = {
  title: "Component/Form/Radio",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <Radio>포도</Radio>
        <Radio>딸기</Radio>
        <Radio>바나나</Radio>
      </>
    ),
  },
};
