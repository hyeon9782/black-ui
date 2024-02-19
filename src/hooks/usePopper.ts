import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useDisclosure from "./useDisclosure";
import useOutsideClick from "./useOutsideClick";

const usePopper = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [contentPosition, setContentPosition] = useState({ top: 0, left: 0 });

  const { ref } = useOutsideClick({ callback: onClose });

  useLayoutEffect(() => {
    const trigger = triggerRef.current;
    const content = contentRef.current;

    if (isOpen && trigger !== null && content !== null) {
      const triggerRect = trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();

      console.log(triggerRect.height);

      setContentPosition({
        top: triggerRect.height + 10,
        left: (triggerRect.width - contentRect.width) / 2,
      });
    }
  }, [isOpen]);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    triggerRef,
    contentRef,
    ref,
    contentPosition,
  };
};

export default usePopper;
