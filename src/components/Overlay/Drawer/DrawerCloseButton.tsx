import { useDrawerContext } from "./Drawer";
import { CloseButton } from "@/components/Other/CloseButton";

const DrawerCloseButton = () => {
  const { onClose } = useDrawerContext();
  return <CloseButton onClose={onClose} />;
};

export default DrawerCloseButton;
