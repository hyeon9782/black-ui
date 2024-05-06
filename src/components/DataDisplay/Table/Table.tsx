import { PropsWithChildren, createContext, useContext } from "react";
import { TableVariants, table } from "./Table.css";

const TableContext = createContext<TableVariants>({});

const Table = ({
  children,
  variant = "simple",
  size = "lg",
  ...props
}: PropsWithChildren<TableVariants>) => {
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
