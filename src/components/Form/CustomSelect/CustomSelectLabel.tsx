import { PropsWithChildren } from "react";
import { selectLabel } from "./CustomSelect.css";

const CustomSelectLabel = ({ children }: PropsWithChildren) => {
  return <div className={selectLabel({})}>{children}</div>;
};

export default CustomSelectLabel;
