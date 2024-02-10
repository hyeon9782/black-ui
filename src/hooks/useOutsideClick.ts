import { useEffect, useRef, useState } from "react";

type UseOutsideClickReturn = [
  React.RefObject<HTMLElement>,
  boolean,
  (handler: (event: MouseEvent) => void) => void,
];

const useOutsideClick: () => UseOutsideClickReturn = () => {
  const [isOutsideClick, setIsOutsideClick] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      setIsOutsideClick(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const setHandler = (handler: (event: MouseEvent) => void) => {
    setIsOutsideClick(false);
    handler(event);
  };

  return [ref, isOutsideClick, setHandler];
};

export default useOutsideClick;
