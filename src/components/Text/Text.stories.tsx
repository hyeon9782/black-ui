import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta = {
  title: "Component/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
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
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const Component = (args: any) => {
  return (
    <>
      <Text fontSize="6xl">6xl</Text>
      <Text fontSize="5xl">5xl</Text>
      <Text fontSize="4xl">4xl</Text>
      <Text fontSize="3xl">3xl</Text>
      <Text fontSize="2xl">2xl</Text>
      <Text fontSize="xl">xl</Text>
      <Text fontSize="lg">lg</Text>
      <Text fontSize="md">md</Text>
      <Text fontSize="sm">sm</Text>
      <Text fontSize="xs">xs</Text>
    </>
  );
};

export const FontSize: Story = {
  args: {},
  render: Component,
};
