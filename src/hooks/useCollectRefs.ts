import { RefObject, useEffect, useRef } from "react";
type UseRefs = {
  refs: RefObject<HTMLElement[]>;
  setter?: (index: number) => void;
};
const useCollectRefs = ({ refs, setter }: UseRefs) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref?.current && refs?.current) {
      refs.current.push(ref.current);
      setter?.(refs.current.indexOf(ref.current));
      return () => {
        if (ref.current && refs.current) {
          const index = refs.current.indexOf(ref.current);
          if (index !== -1) {
            refs.current.splice(index, 1);
          }
        }
      };
    }
  }, [refs, ref]);

  return { ref };
};

export default useCollectRefs;
