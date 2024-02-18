import { useEffect, useRef } from "react";

const useOutsideClick = ({ callback }: { callback: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const pageClick = (e: any) => {
      if (!ref.current?.contains(e.target)) {
        callback();
      }
    };
    window.addEventListener("click", pageClick);

    return () => {
      window.removeEventListener("click", pageClick);
    };
  }, []);

  return { ref };
};

export default useOutsideClick;
