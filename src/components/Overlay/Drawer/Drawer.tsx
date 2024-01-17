import React, { ReactNode, createContext } from "react";
import { DrawerVariants, drawer } from "./Drawer.css";

type DrawerContextProps = {
  onClose: () => void;
};

export const DrawerContext = createContext<DrawerContextProps>({
  onClose: () => {},
});

type DrawerProps = DrawerVariants & {
  children: ReactNode;
  onClose: () => void;
};

const Drawer = ({
  size = "md",
  placement = "right",
  children,
  isOpen,
  onClose,
}: DrawerProps) => {
  return (
    <div className={drawer({ size, placement, isOpen })}>
      <DrawerContext.Provider value={{ onClose }}>
        {children}
      </DrawerContext.Provider>
    </div>
  );
};

export default Drawer;
