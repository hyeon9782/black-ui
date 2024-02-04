import { ReactNode, createContext } from "react";
import { TableVariants, table } from "./Table.css";

type TableContextProps = {
  variant?: "simple" | "filled" | "unstyled" | undefined;
};

export const TableContext = createContext<TableContextProps>({});

type TableProps = TableVariants & {
  children: ReactNode;
};
const Table = ({ children, variant, ...props }: TableProps) => {
  return (
    <TableContext.Provider value={{ variant }}>
      <table className={table({ variant })} {...props}>
        {children}
      </table>
    </TableContext.Provider>
  );
};

export default Table;
