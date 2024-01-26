import { IoMdSettings } from "react-icons/io";
import Card from "@/components/DataDisplay/Card";
import { Avatar } from "./DataDisplay/Avatar";
import { container, overlayContainer } from "@/app.css";
import { Badge } from "./DataDisplay/Badge";
import { Tag, TagCloseButton, TagIcon, TagLabel } from "./DataDisplay/Tag";
import List from "./DataDisplay/List";
import ProductBox, { ProductItem } from "./ProductBox";

const DataDisplayArea = () => {
  const productData: ProductItem[] = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
    // ...
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
        <Avatar name="jeongho" src="/이력서 사진.jpg" size="md" />
        <Avatar name="jeongho" src="/이력서 사진.jpg" size="lg" />
        <Avatar name="jeongho" src="/이력서 사진.jpg" size="xl" />
        <Avatar name="jeongho" src="/이력서 사진!!.jpg" size="2xl" />
      </fieldset>
      <fieldset className={container}>
        <legend>Card</legend>
        <Card>Card</Card>
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
          <TagCloseButton />
        </Tag>
      </fieldset>
      <fieldset className={container}>
        <legend>Table</legend>
      </fieldset>
    </div>
  );
};

export default DataDisplayArea;
