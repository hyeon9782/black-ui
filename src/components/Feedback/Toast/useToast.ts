import { useContext } from "react";
import { ToastDispatchContext, ToastStateContext } from "./ToastProvider";
import { Toast } from "@/components/Feedback/Toast/Toast";

const useToast = () => {
  const { open, close } = useContext(ToastDispatchContext);
  const toasts = useContext(ToastStateContext);

  if (!open) throw new Error("Toast Provider를 추가해주세요.");

  const openToast = (toast: Toast) => {
    if (toasts.length === 3) return;
    open(toast);
  };

  const closeToast = (id: string) => {
    close(id);
  };

  return { openToast, closeToast };
};

export default useToast;
