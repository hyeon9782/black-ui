import { useOutsideClick } from "@/hooks";
import useDisclosure from "@/hooks/useDisclosure";
import { useRef } from "react";

export type UsePopoverProps = {};

export function usePopover() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const { ref } = useOutsideClick({ callback: onClose });

  return { isOpen, onOpen, onClose, onToggle, triggerRef, popoverRef, ref };
}
