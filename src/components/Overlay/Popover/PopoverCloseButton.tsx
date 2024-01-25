import { useContext } from "react";
import { PopoverContext } from "./Popover";
import { IoMdClose } from "react-icons/io";

const PopoverCloseButton = () => {
  const { hidePopover } = useContext(PopoverContext);
  return (
    <div onClick={hidePopover}>
      <IoMdClose />
    </div>
  );
};

export default PopoverCloseButton;
