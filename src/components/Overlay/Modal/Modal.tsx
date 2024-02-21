import { ReactNode, createContext, useContext } from "react";
import { wrap } from "./Modal.css";
import Portal from "../../Other/Portal/Portal";

type ModalContext = {
  onClose: () => void;
  isOpen?: boolean;
};

const ModalContext = createContext<ModalContext | null>(null);

export type ModalProps = {
  children?: ReactNode;
  onClose: () => void;
  isOpen?: boolean;
};
const Modal = ({ children, onClose, isOpen, ...props }: ModalProps) => {
  const value = {
    onClose,
    isOpen,
  };
  return (
    isOpen && (
      <Portal>
        <div className={wrap} {...props}>
          <ModalContext.Provider value={value}>
            {children}
          </ModalContext.Provider>
        </div>
      </Portal>
    )
  );
};

export default Modal;

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("There is no ModalContext");
  }
  return context;
};
