import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import AccordionButton from "./AccordionButton";
import AccordionPanel from "./AccordionPanel";

const meta = {
  title: "Component/Disclosure/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <Accordion>
        <AccordionItem>
          <AccordionButton>1번 제목</AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>2번 제목</AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    ),
  },
};

export const Multiple: Story = {
  args: {
    children: (
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>1번 제목</AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>2번 제목</AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    ),
  },
};
