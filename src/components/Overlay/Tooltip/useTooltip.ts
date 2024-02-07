import useDisclosure from "@/hooks/useDisclosure";
import { useEffect, useRef, useState } from "react";

export function useTooltip() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const ref = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLElement>(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const [tooltipWidth, setTooltipWidth] = useState(0);

  useEffect(() => {
    if (ref.current && tooltipRef.current) {
      const { height, width } = ref.current?.getBoundingClientRect();
      const width1 = (width - tooltipRef.current?.offsetWidth) / 2;
      setTooltipWidth(width1);
      setTooltipHeight(height);

      console.log(height);
      console.log(width1);
    }
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    tooltipHeight,
    tooltipWidth,
    ref,
    tooltipRef,
  };
}
