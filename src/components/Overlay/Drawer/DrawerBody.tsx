import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const DrawerBody = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default DrawerBody;
