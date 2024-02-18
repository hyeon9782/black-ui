import type { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import TableContainer from "./TableContainer";
import TableCaption from "./TableCaption";
import Thead from "./Thead";
import Tr from "./Tr";
import Th from "./Th";
import Tbody from "./Tbody";
import Td from "./Td";
import Tfoot from "./Tfoot";

const meta = {
  title: "Component/DataDisplay/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const Component = (args?: any) => {
  return (
    <TableContainer>
      <Table {...args}>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export const Simple: Story = {
  args: { variant: "simple" },
  render: Component,
};

export const Unstyled: Story = {
  args: { variant: "unstyled" },
  render: Component,
};
