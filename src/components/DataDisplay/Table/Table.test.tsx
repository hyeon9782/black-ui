import { render, screen } from "@testing-library/react";
import Table from "./Table";
import TableContainer from "./TableContainer";
import TableCaption from "./TableCaption";
import Thead from "./Thead";
import Tr from "./Tr";
import Th from "./Th";
import Tbody from "./Tbody";
import Td from "./Td";
import Tfoot from "./Tfoot";

describe("Table 컴포넌트 테스트", () => {
  test("Table 컴포넌트가 렌더링된다.", () => {
    render(
      <TableContainer>
        <Table data-testid="table">
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
      </TableContainer>,
    );

    expect(screen.getByTestId("table")).toBeInTheDocument();
  });
});
