export type ProductItem = {
  id: number;
  name: string;
  price: number;
};

const ProductBox = ({ product }: { product: ProductItem }) => {
  return (
    <div
      style={{
        border: "1px solid lightgray",
        padding: "10px",
        borderRadius: "5px",
        height: "100px",
      }}
    >
      <div>{product.name}</div>
      <div>{product.price}만원</div>
    </div>
  );
};

export default ProductBox;
