import { useModalContext } from "./Modal";
import { overlay } from "./Modal.css";

const ModalOverlay = () => {
  const { onClose } = useModalContext();
  return <div onClick={onClose} className={overlay}></div>;
};

export default ModalOverlay;
