import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const ModalHeader = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ModalHeader;
