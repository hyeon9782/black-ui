import { useContext, useEffect, useState } from "react";
import { ToastVariants, toast } from "./Toast.css";
import { ToastDispatchContext } from "./ToastProvider";
export type Toast = ToastVariants & {
  id?: string;
  title: string;
  description: string;
  duration?: number;
  position?: string;
};
const Toast = ({
  title,
  duration = 3000,
  description,
  status,
  position,
  id = "",
}: Toast) => {
  const { close } = useContext(ToastDispatchContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      close(id);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);
  return (
    <div className={toast({ status })}>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default Toast;

/*



*/
