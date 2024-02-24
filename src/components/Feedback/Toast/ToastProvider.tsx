import { ReactNode, createContext, useId, useMemo, useState } from "react";
import ToastList from "./ToastList";
import { Toast } from "./Toast";

type Props = {
  children: ReactNode;
};

type ToastDispatchContextProps = {
  open: (toast: Toast) => void;
  close: (id: string) => void;
};

export const ToastStateContext = createContext<Toast[]>([]);

export const ToastDispatchContext = createContext<ToastDispatchContextProps>({
  open: () => {},
  close: () => {},
});

let num = 0;

const ToastProvider = ({ children }: Props) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const memoizedToasts = useMemo(() => toasts, [toasts]);
  const id = useId();

  const open = ({ title, description, duration, status, position }: Toast) => {
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: id + num++,
        title,
        description,
        duration,
        status,
        position,
      },
    ]);
  };

  const close = (id: string) => {
    setToasts((prevToasts) => {
      return prevToasts.filter((prevToast) => prevToast.id !== id);
    });
  };

  const memoizedAction = useMemo(
    () => ({
      open,
      close,
    }),
    [toasts],
  );
  return (
    <div>
      <ToastStateContext.Provider value={memoizedToasts}>
        <ToastDispatchContext.Provider value={memoizedAction}>
          {children}
          <ToastList />
        </ToastDispatchContext.Provider>
      </ToastStateContext.Provider>
    </div>
  );
};

export default ToastProvider;
