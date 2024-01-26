import { ReactNode, createContext } from "react";
import { TableVariants, table } from "./Table.css";

export const TableContext = createContext<TableVariants>({});

type TableProps = TableVariants & {
  children: ReactNode;
};
const Table = ({ children, variant }: TableProps) => {
  return (
    <TableContext.Provider value={{ variant }}>
      <table className={table({ variant })}>{children}</table>
    </TableContext.Provider>
  );
};

export default Table;
