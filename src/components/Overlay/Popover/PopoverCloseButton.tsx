import { useContext } from "react";
import { PopoverContext } from "./Popover";
import { CloseButton } from "@/components/Other";

const PopoverCloseButton = () => {
  const { onClose } = useContext(PopoverContext);
  return <CloseButton onClose={onClose} />;
};

export default PopoverCloseButton;
