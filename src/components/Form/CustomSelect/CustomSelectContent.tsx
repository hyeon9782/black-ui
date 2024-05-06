import { PropsWithChildren } from "react";
import { useCustomSelectContext } from "./CustomSelect";
import { selectContent } from "./CustomSelect.css";

const CustomSelectContent = ({ children }: PropsWithChildren) => {
  const { isOpen } = useCustomSelectContext();
  return <div className={selectContent({ isOpen })}>{children}</div>;
};

export default CustomSelectContent;
