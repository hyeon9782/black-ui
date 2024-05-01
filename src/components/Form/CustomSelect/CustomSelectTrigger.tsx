import { PropsWithChildren } from "react";
import { useCustomSelectContext } from "./CustomSelect";

const CustomSelectTrigger = ({ children, ...props }: PropsWithChildren) => {
  const { toggleContent, selectedValue } = useCustomSelectContext();
  return (
    <div {...props} onClick={toggleContent}>
      {selectedValue.label || "Select"}
    </div>
  );
};

export default CustomSelectTrigger;
