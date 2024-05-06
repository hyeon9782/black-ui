import { PropsWithChildren } from "react";
import { useCustomSelectContext } from "./CustomSelect";
import { selectTrigger } from "./CustomSelect.css";

const CustomSelectTrigger = ({ children, ...props }: PropsWithChildren) => {
  const { toggleContent, selectedValue, size, variant, label } =
    useCustomSelectContext();
  return (
    <div
      {...props}
      onClick={toggleContent}
      className={selectTrigger({ size, variant })}
    >
      {selectedValue.label || label}
    </div>
  );
};

export default CustomSelectTrigger;
