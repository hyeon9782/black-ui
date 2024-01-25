import { ReactNode, createContext } from "react";
import { wrap } from "./Modal.css";
import Portal from "../Portal/Portal";

type ModalContext = {
  onClose: () => void;
  isOpen: boolean;
};

export const ModalContext = createContext<ModalContext>({
  onClose: () => {},
  isOpen: false,
});
type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
};
const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  const value = {
    onClose,
    isOpen,
  };
  return (
    isOpen && (
      <Portal>
        <div className={wrap}>
          <ModalContext.Provider value={value}>
            {children}
          </ModalContext.Provider>
        </div>
      </Portal>
    )
  );
};

export default Modal;
