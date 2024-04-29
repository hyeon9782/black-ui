import type { Meta, StoryObj } from "@storybook/react";
import CustomSlider from "./CustomSlider";
import { useState } from "react";

const meta = {
  title: "Component/Form/CustomSlider",
  component: CustomSlider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CustomSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const XSmal: Story = {
  args: { size: "xs", color: "gray" },
  render: function (args) {
    const [value, setValue] = useState(0);
    return (
      <div style={{ width: "400px" }}>
        <CustomSlider
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          {...args}
        />
      </div>
    );
  },
};

export const Small: Story = {
  args: { size: "sm", color: "blue" },
  render: function (args) {
    const [value, setValue] = useState(0);
    return (
      <div style={{ width: "400px" }}>
        <CustomSlider
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          {...args}
        />
      </div>
    );
  },
};

export const Medium: Story = {
  args: { size: "md", color: "green" },
  render: function (args) {
    const [value, setValue] = useState(0);
    return (
      <div style={{ width: "400px" }}>
        <CustomSlider
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          {...args}
        />
      </div>
    );
  },
};

export const Large: Story = {
  args: { size: "lg", color: "red" },
  render: function (args) {
    const [value, setValue] = useState(0);
    return (
      <div style={{ width: "400px" }}>
        <CustomSlider
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          {...args}
        />
      </div>
    );
  },
};
