import { PropsWithChildren } from "react";
import { drawerHeader } from "./Drawer.css";

const DrawerHeader = ({ children }: PropsWithChildren) => {
  return <div className={drawerHeader}>{children}</div>;
};

export default DrawerHeader;
