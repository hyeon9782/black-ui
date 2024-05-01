import { PropsWithChildren } from "react";
import { drawerBody } from "./Drawer.css";

const DrawerBody = ({ children }: PropsWithChildren) => {
  return <div className={drawerBody}>{children}</div>;
};

export default DrawerBody;
