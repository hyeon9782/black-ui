import type { Meta, StoryObj } from "@storybook/react";
import Slider from "./Slider";
import SliderTrack from "./SliderTrack";
import SliderThumb from "./SliderThumb";
import SliderFilledTrack from "./SliderFilledTrack";

const meta = {
  title: "Component/Form/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    children: (
      <Slider size="xs" color="red">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    ),
  },
};
