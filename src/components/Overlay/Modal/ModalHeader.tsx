import { PropsWithChildren } from "react";
import { header } from "./Modal.css";

const ModalHeader = ({ children }: PropsWithChildren) => {
  return <div className={header}>{children}</div>;
};

export default ModalHeader;
