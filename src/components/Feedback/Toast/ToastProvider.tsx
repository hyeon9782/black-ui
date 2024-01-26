import { ReactNode, createContext, useMemo, useState } from "react";
import ToastList from "./ToastList";
import { Toast } from "./Toast";

type Props = {
  children: ReactNode;
};

type ToastDispatchContextProps = {
  open: () => void;
  close: (id: number) => void;
};

export const ToastStateContext = createContext<Toast[]>([]);

export const ToastDispatchContext = createContext<ToastDispatchContextProps>({
  open: () => {},
  close: () => {},
});

const ToastProvider = ({ children }: Props) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const memoizedToasts = useMemo(() => toasts, [toasts]);

  const open = () => {
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: prevToasts.length,
        title: `${prevToasts.length} 번째 메시지`,
      },
    ]);
  };

  const close = (id: number) => {
    setToasts((prevToasts) => {
      return prevToasts.filter((prevToast) => prevToast.id === id);
    });
  };

  const memoizedAction = useMemo(
    () => ({
      open,
      close,
    }),
    []
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
