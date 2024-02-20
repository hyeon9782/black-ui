import { ReactNode, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { AccordionContext } from "./Accordion";
import { button } from "./Accordion.css";
type Props = {
  children: ReactNode;
  index?: number;
  isDisabled?: boolean;
  id?: string;
};
const AccordionButton = ({ children, index = 0, isDisabled, id }: Props) => {
  const {
    allowMultiple,
    allowToggle,
    onChange,
    removeIndex,
    appendIndex,
    resetIndex,
    indexes,
  } = useContext(AccordionContext);

  const isInclude = indexes?.includes(index);

  const handleButtonClick = (index: number) => {
    if (onChange) {
      onChange();
    }

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
      role="button"
      aria-expanded={isInclude}
      aria-controls={id}
      aria-disabled={!allowToggle && !allowMultiple && isInclude}
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

/*

WAI-ARIA Roles, States, and Properties


*/
