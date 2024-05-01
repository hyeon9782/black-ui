import type { Meta, StoryObj } from "@storybook/react";
import CustomSelect from "./CustomSelect";
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

const Component = (args: any) => {
  return (
    <CustomSelect {...args}>
      <CustomSelectTrigger></CustomSelectTrigger>
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

export const Basic: Story = {
  args: {},
  render: Component,
};
