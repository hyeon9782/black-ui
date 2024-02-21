import { ReactNode, createContext, useContext } from "react";
import { TableVariants, table } from "./Table.css";

type TableContextProps = {
  variant?: "simple" | "unstyled" | undefined;
  size?: "sm" | "md" | "lg" | undefined;
};

const TableContext = createContext<TableContextProps>({});

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

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("There is no TableContext");
  }
  return context;
};
