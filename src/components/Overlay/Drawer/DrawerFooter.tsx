import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const DrawerFooter = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default DrawerFooter;
