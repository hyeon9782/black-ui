import { useContext } from "react";
import { DrawerContext } from "./Drawer";
import { CloseButton } from "@/components/Other/CloseButton";

const DrawerCloseButton = () => {
  const { onClose } = useContext(DrawerContext);
  return <CloseButton onClose={onClose} />;
};

export default DrawerCloseButton;
