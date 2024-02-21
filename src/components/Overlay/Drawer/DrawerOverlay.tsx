import { drawerOverlay } from "./Drawer.css";
import { useDrawerContext } from "./Drawer";

const DrawerOverlay = () => {
  const { onClose } = useDrawerContext();
  return <div className={drawerOverlay} onClick={onClose}></div>;
};

export default DrawerOverlay;
