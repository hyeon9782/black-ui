import { useCustomSelectContext } from "./CustomSelect";
import { selectTrigger } from "./CustomSelect.css";

const CustomSelectTrigger = ({ ...props }) => {
  const { toggleContent, selectedValue, size, variant, label, isDisabled } =
    useCustomSelectContext();
  return (
    <button
      {...props}
      disabled={isDisabled}
      onClick={toggleContent}
      className={selectTrigger({ size, variant })}
    >
      {selectedValue.label || label}
    </button>
  );
};

export default CustomSelectTrigger;
