import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ModalContext } from "./Modal";

const ModalCloseButton = () => {
  const { onClose } = useContext(ModalContext);
  return (
    <div onClick={onClose}>
      <IoMdClose />
    </div>
  );
};

export default ModalCloseButton;
