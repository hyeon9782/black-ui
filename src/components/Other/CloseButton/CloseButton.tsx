import { IoMdClose } from "react-icons/io";
import { CloseButtonVariants, close } from "./CloseButton.css";
import { ReactElement } from "react";
type CloseButtonProps = CloseButtonVariants & {
  icon?: ReactElement;
  onClose?: () => void;
};
const CloseButton = ({ size, icon, onClose, ...props }: CloseButtonProps) => {
  return (
    <button onClick={onClose} className={close({ size })} {...props}>
      {icon || <IoMdClose />}
    </button>
  );
};

export default CloseButton;
