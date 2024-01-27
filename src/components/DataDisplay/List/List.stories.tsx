import type { Meta, StoryObj } from "@storybook/react";
import List from "./List";
import ProductBox, { ProductItem } from "@/components/ProductBox";

const meta = {
  title: "Component/DataDisplay/List",
  component: List,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const productData: ProductItem[] = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
];

const mapProductComponentProps = (product: ProductItem) => ({
  product,
  onClick: () => console.log(`Clicked on ${product.name}`),
});

export const Column: Story = {
  args: {
    mapComponentProps: mapProductComponentProps,
    component: ProductBox,
    listData: productData,
    space: "md",
    direction: "column",
  },
};

export const Row: Story = {
  args: {
    mapComponentProps: mapProductComponentProps,
    component: ProductBox,
    listData: productData,
    space: "md",
    direction: "row",
  },
};
