import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const DrawerHeader = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default DrawerHeader;
