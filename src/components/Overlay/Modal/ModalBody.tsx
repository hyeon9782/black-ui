import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const ModalBody = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ModalBody;
