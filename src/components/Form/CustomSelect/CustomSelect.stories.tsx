import type { Meta, StoryObj } from "@storybook/react";
import CustomSelect, { CustomSelectProps } from "./CustomSelect";
import CustomSelectContent from "./CustomSelectContent";
import CustomSelectGroup from "./CustomSelectGroup";
import CustomSelectItem from "./CustomSelectItem";
import CustomSelectLabel from "./CustomSelectLabel";
import CustomSelectTrigger from "./CustomSelectTrigger";

const meta = {
  title: "Component/Form/CustomSelect",
  component: CustomSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {<Story />}
      </div>
    ),
  ],
} satisfies Meta<typeof CustomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const Component = (args: CustomSelectProps) => {
  return (
    <CustomSelect {...args}>
      <CustomSelectTrigger />
      <CustomSelectContent>
        <CustomSelectGroup>
          <CustomSelectLabel>Fruits</CustomSelectLabel>
          <CustomSelectItem value="apple">Apple</CustomSelectItem>
          <CustomSelectItem value="banana">Banana</CustomSelectItem>
          <CustomSelectItem value="blueberry">Blueberry</CustomSelectItem>
        </CustomSelectGroup>
      </CustomSelectContent>
    </CustomSelect>
  );
};

export const Outline: Story = {
  args: {
    size: "md",
    variant: "outline",
    label: "과일을 선택해주세요!",
  },
  render: Component,
};

export const Filled: Story = {
  args: {
    size: "md",
    variant: "filled",
    label: "과일을 선택해주세요!",
  },
  render: Component,
};

export const Unstyled: Story = {
  args: {
    size: "md",
    variant: "unstyled",
    label: "과일을 선택해주세요!",
  },
  render: Component,
};

export const Flushed: Story = {
  args: {
    size: "md",
    variant: "flushed",
    label: "과일을 선택해주세요!",
  },
  render: Component,
};
