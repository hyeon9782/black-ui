import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";
import { useState } from "react";

const meta = {
  title: "Component/Pagination",
  component: Pagination,
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

const Component = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <Pagination
      onPageChange={handlePageChange}
      currentPage={currentPage}
      totalPage={30}
    />
  );
};

export const Basic: Story = {
  args: {},
  render: Component,
};
