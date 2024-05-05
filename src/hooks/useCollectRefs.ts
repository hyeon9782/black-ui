import { RefObject, useEffect, useRef, useState } from "react";
type UseRefs = {
  refs: RefObject<HTMLElement[]>;
  setter?: (index: number) => void;
};

const useCollectRefs = ({ refs, setter }: UseRefs) => {
  const ref = useRef<HTMLElement>(null);
  const [beRef, setBeRef] = useState<any>(false);

  useEffect(() => {
    setBeRef(ref?.current && refs?.current);

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
  }, [beRef]);

  return { ref };
};

export default useCollectRefs;
