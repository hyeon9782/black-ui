import type { Meta, StoryObj } from "@storybook/react";
import PinInput from "./PinInput";
import PinInputField from "./PinInputField";

const meta = {
  title: "Component/Form/PinInput",
  component: PinInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    componentSubtitle: "PinInput 컴포넌트입니다.",
    docs: {
      description: {
        component: "PinInput을 구현할 때 사용합니다.",
      },
    },
  },
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    size: "lg",
  },
  render: function Render(args) {
    return (
      <PinInput {...args}>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    );
  },
};
