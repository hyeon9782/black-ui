import type { Meta, StoryObj } from "@storybook/react";
import PinInput from "./PinInput";
import PinInputField from "./PinInputField";

const meta = {
  title: "Component/Form/PinInput",
  component: PinInput,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    size: "lg",
    children: (
      <>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </>
    ),
  },
};
