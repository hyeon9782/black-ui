import { PropsWithChildren } from "react";
import { modal } from "./Modal.css";

const ModalContent = ({ children }: PropsWithChildren) => {
  return <div className={modal}>{children}</div>;
};

export default ModalContent;
