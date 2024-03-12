import { PropsWithChildren, createContext, useContext } from "react";
import { wrap } from "./Modal.css";
import Portal from "../../Other/Portal/Portal";

type ModalContext = {
  onClose?: () => void;
  isOpen?: boolean;
};

const ModalContext = createContext<ModalContext | null>(null);

export type ModalProps = {
  onClose?: () => void;
  isOpen?: boolean;
};
const Modal = ({
  children,
  onClose,
  isOpen,
  ...props
}: PropsWithChildren<ModalProps>) => {
  const value = {
    onClose,
    isOpen,
  };

  return isOpen ? (
    <Portal>
      <ModalContext.Provider value={value}>
        <div className={wrap} {...props}>
          {children}
        </div>
      </ModalContext.Provider>
    </Portal>
  ) : (
    <></>
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
