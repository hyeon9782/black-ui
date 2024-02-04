import { render, screen } from "@testing-library/react";
import List from "./List";
import ProductBox, { ProductItem } from "@/components/ProductBox";

describe("List 컴포넌트 테스트", () => {
  test("List 컴포넌트가 렌더링된다.", () => {
    const productData: ProductItem[] = [
      { id: 1, name: "Product A", price: 10 },
      { id: 2, name: "Product B", price: 20 },
    ];

    const mapProductComponentProps = (product: ProductItem) => ({
      product,
      onClick: () => console.log(`Clicked on ${product.name}`),
    });
    render(
      <List
        data-testid="List"
        component={ProductBox}
        listData={productData}
        space="md"
        direction="column"
        mapComponentProps={mapProductComponentProps}
      />,
    );

    expect(screen.getByTestId("List")).toBeInTheDocument();
  });
});
