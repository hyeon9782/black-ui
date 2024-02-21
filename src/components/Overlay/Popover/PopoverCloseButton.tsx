import { usePopoverContext } from "./Popover";
import { CloseButton } from "@/components/Other";

const PopoverCloseButton = () => {
  const { onClose } = usePopoverContext();
  return <CloseButton onClose={onClose} />;
};

export default PopoverCloseButton;
