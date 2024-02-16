import { ReactNode, createContext } from "react";
import { TableVariants, table } from "./Table.css";

type TableContextProps = {
  variant?: "simple" | "unstyled" | undefined;
  size?: "sm" | "md" | "lg" | undefined;
};
export const TableContext = createContext<TableContextProps>({});

type TableProps = TableVariants & {
  children?: ReactNode;
};
const Table = ({ children, variant, size = "lg", ...props }: TableProps) => {
  return (
    <TableContext.Provider value={{ variant, size }}>
      <table className={table({ variant })} {...props}>
        {children}
      </table>
    </TableContext.Provider>
  );
};

export default Table;
