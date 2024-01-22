import { useContext } from "react";
import { drawerOverlay } from "./Drawer.css";
import { DrawerContext } from "./Drawer";

const DrawerOverlay = () => {
  const { onClose } = useContext(DrawerContext);
  return <div className={drawerOverlay} onClick={onClose}></div>;
};

export default DrawerOverlay;
