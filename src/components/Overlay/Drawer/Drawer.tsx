import { ReactNode, createContext, useContext } from "react";
import { DrawerVariants, drawer } from "./Drawer.css";
import Portal from "../../Other/Portal/Portal";

type DrawerContextProps = DrawerVariants & {
  onClose: () => void;
};

const DrawerContext = createContext<DrawerContextProps | null>(null);

type DrawerProps = DrawerVariants & {
  children: ReactNode;
  onClose: () => void;
};

const Drawer = ({
  placement = "right",
  children,
  isOpen,
  onClose,
  ...props
}: DrawerProps) => {
  return (
    <Portal>
      <div className={drawer({ isOpen })} {...props}>
        <DrawerContext.Provider value={{ onClose, placement, isOpen }}>
          {children}
        </DrawerContext.Provider>
      </div>
    </Portal>
  );
};

export default Drawer;

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("There is no DrawerContext");
  }
  return context;
};
