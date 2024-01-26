import { useContext } from "react";
import { ToastDispatchContext } from "../components/Feedback/Toast/ToastProvider";

const useToast = () => {
  const { open, close } = useContext(ToastDispatchContext);

  const openToast = () => {
    open();
  };

  const closeToast = (id: number) => {
    close(id);
  };

  return { openToast, closeToast };
};

export default useToast;
