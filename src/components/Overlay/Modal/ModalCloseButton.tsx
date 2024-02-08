import { useContext } from "react";
import { ModalContext } from "./Modal";
import { CloseButton } from "@/components/Other/CloseButton";

const ModalCloseButton = () => {
  const { onClose } = useContext(ModalContext);
  return <CloseButton onClose={onClose} />;
};

export default ModalCloseButton;
