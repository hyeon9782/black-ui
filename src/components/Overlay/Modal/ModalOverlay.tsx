import { useContext } from "react";
import { ModalContext } from "./Modal";
import { overlay } from "./Modal.css";

const ModalOverlay = () => {
  const { onClose } = useContext(ModalContext);
  return <div onClick={onClose} className={overlay}></div>;
};

export default ModalOverlay;
