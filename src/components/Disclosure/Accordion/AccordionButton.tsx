import { ForwardedRef, PropsWithChildren, forwardRef } from "react";
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
      handleKeyDown,
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

/*

WAI-ARIA Roles, States, and Properties => O

Keyboard Event

1. Enter 또는 Space 축소된 패널의 아코디언 헤더에 포커스가 있으면 관련 패널을 확장합니다. => O
2. Tab focus가 다음 요소로 이동합니다. => O
3. Shift + Tab 이전 요소로 focus가 이동합니다. => O
4. Down Arrow (선택) focus가 Accordion에 있는 경우 다음 요소의 초점으로 이동합니다. 
5. Up Arrow (선택) focus가 Accordion에 있는 경우 이전 요소의 초점으로 이동합니다. 첫번째 요소에 focus가 있는 경우
아무 작업을 실행하지 않거나 마지막 아코디언 헤더로 초점이 이동합니다.
6. Home (선택) 포커스가 아코디언 헤더에있는 경우 포커스를 첫 번째 아코디언 헤더로 이동합니다.
7. End (선택) 포커스가 아코디언 헤더에있는 경우 포커스를 마지막 아코디언 헤더로 이동합니다.

*/
