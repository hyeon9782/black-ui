import {
  ForwardedRef,
  KeyboardEvent,
  PropsWithChildren,
  forwardRef,
} from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useAccordionContext } from "./Accordion";
import { button } from "./Accordion.css";
import { useAccordionItemContext } from "./AccordionItem";

const AccordionButton = forwardRef(
  ({ children }: PropsWithChildren, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      allowMultiple,
      allowToggle,
      onChange,
      handleOpenItem,
      handleCloseItem,
      handleResetItem,
      refs,
      // handleKeyDown,
      values,
    } = useAccordionContext();

    const { value, id } = useAccordionItemContext();

    const isInclude = values?.includes(value);

    const handleButtonClick = (value: string) => {
      if (onChange) {
        onChange();
      }

      if (!allowMultiple && !allowToggle && !isInclude) {
        handleResetItem();
        handleOpenItem(value);
        return;
      }

      if (allowToggle && isInclude) {
        handleCloseItem(value);
        return;
      }

      if (allowToggle && !isInclude) {
        handleResetItem();
        handleOpenItem(value);
        return;
      }

      if (allowMultiple && isInclude) {
        handleCloseItem(value);
        return;
      }

      if (allowMultiple && !isInclude) {
        handleOpenItem(value);
        return;
      }

      if (!allowMultiple && !allowToggle && isInclude) {
        return;
      }
    };

    return (
      <button
        ref={ref}
        role="button"
        aria-expanded={isInclude}
        aria-controls={id}
        aria-disabled={!allowToggle && !allowMultiple && isInclude}
        // onKeyDown={(e) => handleKeyDown?.(e)}
        onClick={() => handleButtonClick(value)}
        className={button}
        // disabled={isDisabled}
      >
        {children}
        {values?.includes(value) ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
    );
  },
);

export default AccordionButton;
