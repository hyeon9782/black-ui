import useDisclosure from "@/hooks/useDisclosure";
import { useEffect, useRef } from "react";

export type UsePopoverProps = {};

export function usePopover() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const pageClick = (e: any) => {
      if (!wrapRef.current?.contains(e.target)) {
        onClose();
      }
    };
    window.addEventListener("click", pageClick);

    return () => {
      window.removeEventListener("click", pageClick);
    };
  }, []);

  return { isOpen, onOpen, onClose, onToggle, triggerRef, popoverRef, wrapRef };
}
