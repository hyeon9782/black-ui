import useDisclosure from "@/hooks/useDisclosure";
import { useRef } from "react";

export function useTooltip() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    triggerRef,
    tooltipRef,
  };
}
