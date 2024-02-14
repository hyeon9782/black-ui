import { ReactNode, useContext } from "react";
import { drawerContent } from "./Drawer.css";
import { DrawerContext } from "./Drawer";
type Props = {
  children: ReactNode;
};
const DrawerContent = ({ children }: Props) => {
  const { placement, isOpen } = useContext(DrawerContext);

  return <div className={drawerContent({ placement, isOpen })}>{children}</div>;
};

export default DrawerContent;
