import { useContext, useEffect } from "react";
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

1. useToast 커스텀 훅으로 Toast의 위치를 변경할 수 있게 리팩토링

*/
