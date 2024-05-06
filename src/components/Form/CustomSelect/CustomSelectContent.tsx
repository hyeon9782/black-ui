import { PropsWithChildren } from "react";
import { useCustomSelectContext } from "./CustomSelect";
import { selectContent } from "./CustomSelect.css";

const CustomSelectContent = ({ children, ...props }: PropsWithChildren) => {
  const { isOpen } = useCustomSelectContext();
  return (
    <div className={selectContent({ isOpen })} {...props}>
      {children}
    </div>
  );
};

export default CustomSelectContent;
