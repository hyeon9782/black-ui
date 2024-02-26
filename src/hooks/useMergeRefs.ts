import { Ref, MutableRefObject, useEffect, useRef } from "react";

type MutableRef<T> =
  | ((instance: T | null) => void)
  | MutableRefObject<T | null>
  | null;

function useMergeRefs<T>(...refs: MutableRef<T>[]): Ref<T> {
  const mergedRef = useRef<T>(null);

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        (ref as (instance: T | null) => void)(mergedRef.current);
      } else {
        (ref as MutableRefObject<T | null>).current = mergedRef.current;
      }
    });
  }, [refs]);

  return mergedRef;
}

export default useMergeRefs;
