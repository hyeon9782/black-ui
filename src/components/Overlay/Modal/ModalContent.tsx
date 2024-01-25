import { ReactNode } from "react";
import { modal } from "./Modal.css";
type Props = {
  children: ReactNode;
};
const ModalContent = ({ children }: Props) => {
  return <div className={modal({})}>{children}</div>;
};

export default ModalContent;
