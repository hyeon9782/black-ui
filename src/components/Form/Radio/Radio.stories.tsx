import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";
import RadioGroup from "./RadioGroup";
import { useState } from "react";

const meta = {
  title: "Component/Form/Radio",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { direction: "colunm" },
  render: function (args) {
    const [value, setValue] = useState("포도");
    const changeRadio = (value: string) => {
      setValue(value);
    };
    return (
      <div>
        <RadioGroup {...args} onChange={changeRadio}>
          <Radio value="포도">포도</Radio>
          <Radio value="딸기">딸기</Radio>
          <Radio value="바나나">바나나</Radio>
        </RadioGroup>
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          Selected : {value}
        </div>
      </div>
    );
  },
};
