import { PropsWithChildren } from "react";
import { drawerContent } from "./Drawer.css";
import { useDrawerContext } from "./Drawer";

const DrawerContent = ({ children }: PropsWithChildren) => {
  const { placement, isOpen } = useDrawerContext();

  return <div className={drawerContent({ placement, isOpen })}>{children}</div>;
};

export default DrawerContent;
