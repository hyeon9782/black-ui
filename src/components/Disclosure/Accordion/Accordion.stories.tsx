import type { Meta, StoryObj } from "@storybook/react";
import Accordion, { AccordionProps } from "./Accordion";
import AccordionItem from "./AccordionItem";
import AccordionButton from "./AccordionButton";
import AccordionPanel from "./AccordionPanel";

const meta = {
  title: "Component/Disclosure/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const Component = (args: AccordionProps) => {
  return (
    <Accordion {...args}>
      <AccordionItem>
        <AccordionButton>1번 제목</AccordionButton>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>2번 제목</AccordionButton>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export const Basic: Story = {
  args: {},
  render: Component,
};

export const Multiple: Story = {
  args: { allowMultiple: true },
  render: Component,
};

export const Toggle: Story = {
  args: { allowToggle: true },
  render: Component,
};
