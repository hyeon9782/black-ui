import { useEffect, useState } from "react";
import { ToastVariants, toast } from "./Toast.css";
export type Toast = ToastVariants & {
  id?: number;
  title: string;
  description: string;
  duration?: number;
};
const Toast = ({ title, duration = 3000, description, status, id }: Toast) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);
  return visible ? (
    <div className={toast({ status })}>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  ) : (
    <></>
  );
};

export default Toast;
