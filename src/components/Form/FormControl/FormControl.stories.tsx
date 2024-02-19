import type { Meta, StoryObj } from "@storybook/react";
import FormControl from "./FormControl";
import FormErrorMessage from "./FormErrorMessage";
import FormHelperText from "./FormHelperText";
import FormLabel from "./FormLabel";
import { Input } from "../Input";

const meta = {
  title: "Component/Form/FormControl",
  component: FormControl,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

const Component = (args: any) => {
  return (
    <FormControl {...args}>
      <FormLabel>Email</FormLabel>
      <Input />
      <FormHelperText>
        Enter the email you'd like to receive the newsletter on.
      </FormHelperText>
      <FormErrorMessage> Email is required.</FormErrorMessage>
    </FormControl>
  );
};

export const Basic: Story = {
  args: { isInvalid: true },
  render: Component,
};
