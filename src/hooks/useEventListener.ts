import { useEffect, useRef } from "react";

export function useEventListener<T extends Event>(
  eventName: string,
  handler: (event: T) => void,
  element?: HTMLElement | Window | Document | null,
): void {
  const savedHandler = useRef<typeof handler>(handler);

  useEffect(() => {
    const currentHandler = savedHandler.current;

    const listener = (event: T) => currentHandler(event);

    if (element) {
      element.addEventListener(eventName, listener);
    } else {
      window.addEventListener(eventName, listener);
    }

    return () => {
      if (element) {
        element.removeEventListener(eventName, listener);
      } else {
        window.removeEventListener(eventName, listener);
      }
    };
  }, [eventName, element]);
}
