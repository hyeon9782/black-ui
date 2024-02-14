import useDisclosure from "@/hooks/useDisclosure";
import { useRef } from "react";

export function useTooltip() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLElement>(null);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    triggerRef,
    tooltipRef,
  };
}
