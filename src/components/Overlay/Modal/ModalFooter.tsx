import { PropsWithChildren } from "react";
import { footer } from "./Modal.css";

const ModalFooter = ({ children }: PropsWithChildren) => {
  return <div className={footer}>{children}</div>;
};

export default ModalFooter;
