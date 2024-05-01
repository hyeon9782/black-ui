import { PropsWithChildren } from "react";
import { drawerFooter } from "./Drawer.css";

const DrawerFooter = ({ children }: PropsWithChildren) => {
  return <div className={drawerFooter}>{children}</div>;
};

export default DrawerFooter;
