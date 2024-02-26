import { ForwardedRef, PropsWithChildren, Ref, forwardRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useAccordionContext } from "./Accordion";
import { button } from "./Accordion.css";
import { useAccordionItemContext } from "./AccordionItem";
import useCollectRefs from "@/hooks/useCollectRefs";
import useMergeRefs from "@/hooks/useMergeRefs";

const AccordionButton = forwardRef(
  ({ children }: PropsWithChildren, ref: ForwardedRef<HTMLElement>) => {
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

    const { ref: buttonRef } = useCollectRefs({ refs: accordionRefs });

    const mergedRef = useMergeRefs(buttonRef, ref);

    const { value, id, isDisabled } = useAccordionItemContext();

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
        ref={mergedRef as Ref<HTMLButtonElement>}
        role="button"
        aria-expanded={isInclude}
        aria-controls={id}
        aria-disabled={!allowToggle && !allowMultiple && isInclude}
        onKeyDown={handleKeyDown}
        onClick={() => handleButtonClick(value)}
        className={button}
        disabled={isDisabled}
      >
        {children}
        {values?.includes(value) ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
    );
  },
);

export default AccordionButton;
