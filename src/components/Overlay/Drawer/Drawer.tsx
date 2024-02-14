import { ReactNode, createContext } from "react";
import { DrawerVariants, drawer } from "./Drawer.css";
import Portal from "../../Other/Portal/Portal";

type DrawerContextProps = DrawerVariants & {
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
