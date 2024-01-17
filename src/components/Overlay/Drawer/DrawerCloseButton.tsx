import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { DrawerContext } from "./Drawer";

const DrawerCloseButton = () => {
  const { onClose } = useContext(DrawerContext);
  return (
    <div>
      <IoMdClose onClick={onClose} />
    </div>
  );
};

export default DrawerCloseButton;
