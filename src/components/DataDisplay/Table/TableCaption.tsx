import { PropsWithChildren } from "react";
import { TableCaptionVariants, caption } from "./Table.css";
import { useTableContext } from "./Table";

const TableCaption = ({
  children,
  placement,
}: PropsWithChildren<TableCaptionVariants>) => {
  const { size } = useTableContext();
  return <caption className={caption({ placement, size })}>{children}</caption>;
};

export default TableCaption;
