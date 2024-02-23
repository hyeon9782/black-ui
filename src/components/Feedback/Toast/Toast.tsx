import { useContext, useEffect } from "react";
import {
  ToastVariants,
  descriptionBox,
  icon,
  progress,
  time,
  titleBox,
  toast,
} from "./Toast.css";
import { ToastDispatchContext } from "./ToastProvider";
import { CiCircleCheck, CiCircleInfo, CiWarning } from "react-icons/ci";
import { MdOutlineDangerous } from "react-icons/md";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { CloseButton } from "@/components/Other";
export type Toast = ToastVariants & {
  id?: string;
  title: string;
  description: string;
  duration?: number;
  position?: string;
};
const Toast = ({
  title,
  duration = 300000,
  description,
  status,
  id = "",
}: Toast) => {
  const { close } = useContext(ToastDispatchContext);

  const getIcon = () => {
    if (status === "success") return <CiCircleCheck />;
    if (status === "warning") return <CiWarning />;
    if (status === "danger") return <MdOutlineDangerous />;
    if (status === "info") return <CiCircleInfo />;
  };

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
      <div style={{ display: "flex", gap: "10px" }}>
        <div className={icon}>{getIcon()}</div>
        <div>
          <div className={titleBox}>{title}</div>
          <div className={descriptionBox}>{description}</div>
        </div>
        <CloseButton onClose={() => close(id)} />
      </div>
      <div
        className={progress}
        style={assignInlineVars({
          [time]: `${duration / 1000}s`,
        })}
      ></div>
    </div>
  );
};

export default Toast;

/*

1. useToast 커스텀 훅으로 Toast의 위치를 변경할 수 있게 리팩토링

*/
