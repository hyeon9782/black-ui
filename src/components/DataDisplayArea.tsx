import { IoMdSettings } from "react-icons/io";
import { container, overlayContainer } from "@/app.css";
import ProductBox, { ProductItem } from "./ProductBox";
import { Avatar } from "./DataDisplay/Avatar";
import { Card } from "./DataDisplay/Card";
import { List } from "./DataDisplay/List";
import { Badge } from "./DataDisplay/Badge";
import { Tag, TagIcon, TagLabel } from "./DataDisplay/Tag";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "./DataDisplay/Table";

const DataDisplayArea = () => {
  const productData: ProductItem[] = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
  ];

  const mapProductComponentProps = (product: ProductItem) => ({
    product,
    onClick: () => console.log(`Clicked on ${product.name}`),
  });
  return (
    <div className={overlayContainer}>
      <fieldset className={container}>
        <legend>Avatar</legend>
        <Avatar name="jeongho" src="/이력서 사진.jpg" size="xs" />
        <Avatar name="jeongho" src="/이력서 사진.jpg" size="sm" />
        <Avatar name="Hyeon" src="/이력서 사진!.jpg" size="md" />
        <Avatar name="Jeong Ho" src="/이력서 사진!jpg" size="lg" />
        <Avatar name="Hyeon Jeong Ho" size="xl" />
        <Avatar src="/이력서 사진!.jpg" size="2xl" />
      </fieldset>
      <fieldset className={container}>
        <legend>Card</legend>
        <Card variant="elevated">Card</Card>
        <Card variant="filled">Card</Card>
        <Card variant="unstyled">Card</Card>
        <Card variant="outline">Card</Card>
      </fieldset>
      <fieldset className={container}>
        <legend>List</legend>
        <List
          component={ProductBox}
          listData={productData}
          space="md"
          direction="column"
          mapComponentProps={mapProductComponentProps}
        />
        <List
          component={ProductBox}
          listData={productData}
          space="md"
          direction="row"
          mapComponentProps={mapProductComponentProps}
        />
      </fieldset>
      <fieldset className={container}>
        <legend>Badge</legend>
        <Badge variant="outline" color="green">
          Green Outline
        </Badge>
        <Badge variant="solid" color="red">
          Red Solid
        </Badge>
        <Badge variant="subtle" color="blue">
          Blue Subtle
        </Badge>
      </fieldset>
      <fieldset className={container}>
        <legend>Tag</legend>
        <Tag>Sample Tag</Tag>
        <Tag color="red" variant="solid">
          <TagIcon as={<IoMdSettings />} />
          <TagLabel>Left Icon</TagLabel>
        </Tag>
        <Tag color="blue" variant="subtle">
          <TagLabel>Right Icon</TagLabel>
          <TagIcon as={<IoMdSettings />} />
        </Tag>
        <Tag>
          <TagLabel>Close Tag</TagLabel>
        </Tag>
      </fieldset>
      <fieldset className={container}>
        <legend>Table</legend>
        <TableContainer>
          <Table>
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
        <TableContainer>
          <Table variant="unstyled">
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
        <TableContainer>
          <Table variant="filled">
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
      </fieldset>
    </div>
  );
};

export default DataDisplayArea;
