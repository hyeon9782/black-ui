import React, {
  Children,
  ReactNode,
  cloneElement,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { FieldVariants, wrap } from "./PinInput.css";

type PinInputContextProps = {
  mask?: boolean;
  size?: "sm" | "md" | "lg" | "xs" | undefined;
};

export const PinInputContext = createContext<PinInputContextProps>({});

type PinInputProps = FieldVariants & {
  children?: ReactNode;
  mask?: boolean;
  otp?: boolean;
  onComplate?: () => void;
};
const PinInput = ({
  children,
  size = "md",
  otp,
  onComplate,
  ...props
}: PinInputProps) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  inputRefs.current = [];

  const [isCompleted, setIsCompleted] = useState(false);

  // Children 갯수만큼 Refs 추가
  const addToRefs = (el: HTMLInputElement) => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
  };

  // 포커스 이동 함수
  const handleFocus = (index: number, value: number) => {
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
  };

  // Children에 props 추가
  const enhancedChildren = Children.map(children, (child, index) =>
    React.isValidElement(child)
      ? cloneElement(child, {
          ...child.props,
          ref: (el: HTMLInputElement) => addToRefs(el),
          onInputChange: (value: number) => {
            handleFocus(index, value);

            const allFieldsFilled = inputRefs.current.every(
              (input) => input.value !== "",
            );
            if (allFieldsFilled) {
              setIsCompleted(true);
            }
          },
          otp,
        })
      : child,
  );

  useEffect(() => {
    if (inputRefs) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    if (isCompleted && onComplate) {
      onComplate();
    }
  }, [isCompleted, onComplate]);

  const value = {
    size,
  };

  return (
    <div className={wrap({})} {...props}>
      <PinInputContext.Provider value={value}>
        {enhancedChildren}
      </PinInputContext.Provider>
    </div>
  );
};

export default PinInput;

/*

1. aria-label 추가 => O
2. disabled 추가 => O
3. 자동 포커스 추가 => O
4. onComplate 추가 => 
5. otp 추가 => O

*/
