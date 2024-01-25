import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const ModalFooter = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ModalFooter;
