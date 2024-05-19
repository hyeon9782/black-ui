import type { Meta, StoryObj } from "@storybook/react";
import Tree from "./Tree";
import TreeItem from "./TreeItem";

const meta = {
  title: "Component/Tree",
  component: Tree,
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
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

const treeData = {
  id: "1",
  name: "root",
  children: [
    { id: "2", name: "child1" },
    {
      id: "3",
      name: "child2",
      children: [{ id: "4", name: "grandchild1" }],
    },
  ],
};

export const Basic: Story = {
  args: {},
  render: function () {
    return (
      <Tree>
        <TreeItem node={treeData} />
      </Tree>
    );
  },
};
