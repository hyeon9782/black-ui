import { IoMdSettings } from "react-icons/io";
import { container, overlayContainer } from "@/app.css";
import { Avatar } from "./DataDisplay/Avatar";
import { Card, CardHeader, CardBody, CardFooter } from "./DataDisplay/Card";
import { List, ListItem } from "./DataDisplay/List";
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
import ListIcon from "./DataDisplay/List/ListIcon";
// import { Button } from "../../dist";

const DataDisplayArea = () => {
  return (
    <div className={overlayContainer}>
      <fieldset className={container}>
        <legend>Avatar</legend>
        {/* <Button>Button111</Button> */}
        <Avatar name="jeongho" src="/이력서 사진.jpg" size="xs" />
        <Avatar name="jeongho" src="/이력서 사진.jpg" size="sm" />
        <Avatar name="Hyeon" src="/이력서 사진!.jpg" size="md" />
        <Avatar name="Jeong Ho" src="/이력서 사진!jpg" size="lg" />
        <Avatar name="Hyeon Jeong Ho" size="xl" />
        <Avatar src="/이력서 사진!.jpg" size="2xl" />
      </fieldset>
      <fieldset className={container}>
        <legend>Card</legend>
        <Card variant="elevated">
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card variant="filled">
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card variant="unstyled">
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        <Card variant="outline">
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </fieldset>
      <fieldset className={container}>
        <legend>List</legend>
        <List>
          <ListItem>
            <ListIcon as={<IoMdSettings />} />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            <ListIcon as={<IoMdSettings />} />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </ListItem>
          <ListItem>
            <ListIcon as={<IoMdSettings />} />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
          <ListItem>
            <ListIcon as={<IoMdSettings />} />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
        </List>
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
          <Table variant="simple">
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
      </fieldset>
    </div>
  );
};

export default DataDisplayArea;
