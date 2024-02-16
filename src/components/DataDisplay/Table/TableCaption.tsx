import { ReactNode, useContext } from "react";
import { TableCaptionVariants, caption } from "./Table.css";
import { TableContext } from "./Table";

type TableCaptionProps = TableCaptionVariants & {
  children: ReactNode;
};

const TableCaption = ({ children, placement }: TableCaptionProps) => {
  const { size } = useContext(TableContext);
  return <caption className={caption({ placement, size })}>{children}</caption>;
};

export default TableCaption;
