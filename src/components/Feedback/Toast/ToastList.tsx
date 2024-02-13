import { useContext } from "react";
import { ToastStateContext } from "./ToastProvider";
import Toast from "./Toast";
import { wrap } from "./Toast.css";

const ToastList = () => {
  const toastList = useContext(ToastStateContext);

  return (
    <div className={wrap({})}>
      {toastList.map((toast) => {
        return <Toast key={toast.id} {...toast} id={toast.id} />;
      })}
    </div>
  );
};

export default ToastList;
