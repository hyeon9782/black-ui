import { useEffect, useState } from "react";
import { toast } from "./Toast.css";
export type Toast = {
  id?: number;
  title: string;
  duration?: number;
};
const Toast = ({ title, duration = 3000, id }: Toast) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);
  return visible ? <div className={toast({})}>{title}</div> : <></>;
};

export default Toast;
