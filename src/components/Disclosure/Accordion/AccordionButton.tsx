import {
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
  useEffect,
  useRef,
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
      accordionRefs,
      handleKeyDown,
      values,
    } = useAccordionContext();

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      if (buttonRef?.current && accordionRefs.current) {
        accordionRefs?.current.push(buttonRef.current);
        // setIndex(accordionRefs.current.indexOf(buttonRef?.current));
        return () => {
          if (buttonRef.current) {
            const index = accordionRefs.current.indexOf(buttonRef?.current);
            if (index !== -1) {
              accordionRefs?.current.splice(index, 1);
            }
          }
        };
      }
    }, [accordionRefs, buttonRef]);

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
        ref={buttonRef}
        role="button"
        aria-expanded={isInclude}
        aria-controls={id}
        aria-disabled={!allowToggle && !allowMultiple && isInclude}
        onKeyDown={handleKeyDown}
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
