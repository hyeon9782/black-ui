import { useModalContext } from "./Modal";
import { CloseButton } from "@/components/Other/CloseButton";

const ModalCloseButton = () => {
  const { onClose } = useModalContext();
  return <CloseButton onClose={onClose} />;
};

export default ModalCloseButton;
