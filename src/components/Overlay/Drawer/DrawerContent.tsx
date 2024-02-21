import { ReactNode } from "react";
import { drawerContent } from "./Drawer.css";
import { useDrawerContext } from "./Drawer";
type Props = {
  children: ReactNode;
};
const DrawerContent = ({ children }: Props) => {
  const { placement, isOpen } = useDrawerContext();

  return <div className={drawerContent({ placement, isOpen })}>{children}</div>;
};

export default DrawerContent;
