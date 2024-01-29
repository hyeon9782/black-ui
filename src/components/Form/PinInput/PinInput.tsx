import {
  Children,
  ReactNode,
  cloneElement,
  createContext,
  useRef,
} from "react";
import { wrap } from "./PinInput.css";

type PinInputContextProps = {};

export const PinInputContext = createContext<PinInputContextProps>({});

type PinInputProps = {
  children?: ReactNode;
  mask?: boolean;
  size: string;
};
const PinInput = ({ children, size = "md", ...props }: PinInputProps) => {
  const inputRefs = useRef([]);
  inputRefs.current = [];

  // Children 갯수만큼 Refs 추가
  const addToRefs = (el) => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
  };

  // 포커스 이동 함수
  const handleFocus = (index, value) => {
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

    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Children에 props 추가
  const enhancedChildren = Children.map(children, (child, index) =>
    cloneElement(child, {
      ref: (el) => addToRefs(el),
      onInputChange: (value) => handleFocus(index, value),
      ...props,
    })
  );

  const value = {
    size,
    ...props,
  };

  return (
    <div className={wrap({})}>
      <PinInputContext.Provider value={value}>
        {enhancedChildren}
      </PinInputContext.Provider>
    </div>
  );
};

export default PinInput;
