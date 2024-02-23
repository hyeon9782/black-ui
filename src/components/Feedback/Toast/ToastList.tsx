import { useContext } from "react";
import { ToastStateContext } from "./ToastProvider";
import Toast from "./Toast";
import { wrap } from "./Toast.css";
import { Portal } from "@/components/Other";

const ToastList = () => {
  const toastList = useContext(ToastStateContext);

  return (
    <Portal>
      <div className={wrap({})}>
        {toastList.map((toast) => {
          return <Toast key={toast.id} {...toast} id={toast.id} />;
        })}
      </div>
    </Portal>
  );
};

export default ToastList;
