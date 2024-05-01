import { PropsWithChildren } from "react";
import { body } from "./Modal.css";

const ModalBody = ({ children }: PropsWithChildren) => {
  return <div className={body}>{children}</div>;
};

export default ModalBody;
