import type { Meta, StoryObj } from "@storybook/react";
import Tabs, { TabsProps } from "./Tabs";
import Tab from "./Tab";
import TabList from "./TabList";
import TabPanel from "./TabPanel";
import TabPanels from "./TabPanels";

const meta = {
  title: "Component/Disclosure/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const Component = (args: TabsProps) => {
  return (
    <Tabs {...args}>
      <TabList>
        <Tab>1번 Tab</Tab>
        <Tab>2번 Tab</Tab>
        <Tab>3번 Tab</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>1번 내용</TabPanel>
        <TabPanel>2번 내용</TabPanel>
        <TabPanel>3번 내용</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const Line: Story = {
  args: { size: "md", align: "start", variant: "line" },
  render: Component,
};

export const Enclosed: Story = {
  args: { size: "md", align: "start", variant: "enclosed" },
  render: Component,
};

export const SoftRounded: Story = {
  args: { size: "md", align: "start", variant: "soft-rounded" },
  render: Component,
};

export const SolidRounded: Story = {
  args: { size: "md", align: "start", variant: "solid-rounded" },
  render: Component,
};
