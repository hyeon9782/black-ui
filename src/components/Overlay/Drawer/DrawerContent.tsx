import React, { ReactNode, useContext } from "react";
import { drawerContent } from "./Drawer.css";
import { DrawerContext } from "./Drawer";
type Props = {
  children: ReactNode;
};
const DrawerContent = ({ children }: Props) => {
  const { size, placement, isOpen } = useContext(DrawerContext);
  return (
    <div className={drawerContent({ size, placement, isOpen })}>{children}</div>
  );
};

export default DrawerContent;
