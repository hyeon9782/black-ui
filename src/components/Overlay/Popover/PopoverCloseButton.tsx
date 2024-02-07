import { useContext } from "react";
import { PopoverContext } from "./Popover";
import { IoMdClose } from "react-icons/io";
import { close } from "./Popover.css";

const PopoverCloseButton = () => {
  const { onClose } = useContext(PopoverContext);
  return (
    <div onClick={onClose} className={close}>
      <IoMdClose />
    </div>
  );
};

export default PopoverCloseButton;
