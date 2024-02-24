import {
  PropsWithChildren,
  RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { FieldVariants, wrap } from "./PinInput.css";

type PinInputContextProps = {
  mask?: boolean;
  size?: "sm" | "md" | "lg" | "xs" | undefined;
  otp?: boolean;
  handleFocus: (index: number, value: string) => void;
  inputRefs: RefObject<HTMLInputElement[]>;
};

export const PinInputContext = createContext<PinInputContextProps | null>(null);

type PinInputProps = FieldVariants & {
  mask?: boolean;
  otp?: boolean;
  onComplate?: () => void;
  autoFocus?: boolean;
  defaultValue?: string;
};
const PinInput = ({
  children,
  size = "md",
  otp,
  onComplate,
  autoFocus,
  defaultValue,
  mask,
  ...props
}: PropsWithChildren<PinInputProps>) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  // 포커스 이동 함수
  const handleFocus = useCallback((index: number, value: string) => {
    if (
      !value &&
      index === inputRefs.current.length - 1 &&
      inputRefs.current[index].value
    ) {
      inputRefs.current[index].focus();
      return;
    }

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (!value && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  }, []);

  useEffect(() => {
    if (inputRefs && autoFocus) {
      inputRefs.current[0].focus();
    }
  }, []);

  const value = {
    size,
    mask,
    otp,
    handleFocus,
    inputRefs,
  };

  return (
    <div className={wrap} {...props}>
      <PinInputContext.Provider value={value}>
        {children}
      </PinInputContext.Provider>
    </div>
  );
};

export default PinInput;

export const usePinInputContext = () => {
  const context = useContext(PinInputContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

/*

1. aria-label 추가 => O
2. isDisabled 추가 => O
3. autoFocus 추가 => O
5. otp 추가 => O
6. mask 추가 => O
------------------FIX----------------------------
1. onComplate 함수 실행시 refs 참조 값 읽는 에러 수정하기
------------------TODO----------------------------
6. onComplate 추가 => 
7. manageFocus => 
8. defaultValue =>
9. focusBorderColor =>
10. errorBorderColor =>
11. onChange =>
12. placeholder =>
13. variant (outline, flushed, filled, unstyled) =>

*/
