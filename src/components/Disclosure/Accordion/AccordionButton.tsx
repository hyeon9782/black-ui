import { ReactNode, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { AccordionContext } from "./Accordion";
import { button } from "./Accordion.css";
type Props = {
  children: ReactNode;
  index?: number;
  isDisabled?: boolean;
};
const AccordionButton = ({ children, index = 0, isDisabled }: Props) => {
  const {
    allowMultiple,
    allowToggle,
    onChange,
    removeIndex,
    appendIndex,
    resetIndex,
    indexes,
  } = useContext(AccordionContext);

  const handleButtonClick = (index: number) => {
    if (onChange) {
      onChange();
    }

    const isInclude = indexes?.includes(index);

    if (!allowMultiple && !allowToggle && !isInclude) {
      resetIndex();
      appendIndex(index);
      return;
    }

    if (allowToggle && isInclude) {
      removeIndex(index);
      return;
    }

    if (allowToggle && !isInclude) {
      resetIndex();
      appendIndex(index);
      return;
    }

    if (allowMultiple && isInclude) {
      removeIndex(index);
      return;
    }

    if (allowMultiple && !isInclude) {
      appendIndex(index);
      return;
    }

    if (!allowMultiple && !allowToggle && isInclude) {
      return;
    }
  };
  return (
    <button
      onClick={() => handleButtonClick(index)}
      className={button}
      disabled={isDisabled}
    >
      {children}
      {indexes?.includes(index) ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </button>
  );
};

export default AccordionButton;
