import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import TabList from "./TabList";
import TabPanel from "./TabPanel";
import TabPanels from "./TabPanels";

const meta = {
  title: "Component/Disclosure/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <Tabs>
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
    ),
  },
};
