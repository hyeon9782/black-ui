import { PropsWithChildren } from "react";
import { useCustomSelectContext } from "./CustomSelect";

const CustomSelectContent = ({ children }: PropsWithChildren) => {
  const { isOpen } = useCustomSelectContext();
  return isOpen && <div>{children}</div>;
};

export default CustomSelectContent;
