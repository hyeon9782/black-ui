import { useContext } from "react";
import { ToastDispatchContext } from "../components/Feedback/Toast/ToastProvider";
import { Toast } from "@/components/Feedback/Toast/Toast";

const useToast = () => {
  const { open, close } = useContext(ToastDispatchContext);

  const openToast = (toast: Toast) => {
    open(toast);
  };

  const closeToast = (id: number) => {
    close(id);
  };

  return { openToast, closeToast };
};

export default useToast;
