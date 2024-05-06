import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { SelectVariants, selectRoot } from "./CustomSelect.css";
import useOutsideClick from "@/hooks/useOutsideClick";

type CustomSelectContextProps = SelectVariants & {
  isOpen: boolean;
  label: string;
  toggleContent: () => void;
  closeContent: () => void;
  selectedValue: {
    label: string;
    value: string;
  };
  isDisabled?: boolean;
  choiceItem: (item: { label: string; value: string }) => void;
  changeItem: (item: { label: string; value: string }) => void;
};

const CustomSelectContext = createContext<CustomSelectContextProps | null>(
  null,
);

export type CustomSelectProps = SelectVariants & {
  defaultValue?: string;
  label?: string;
  isDisabled?: boolean;
};

const CustomSelect = ({
  children,
  defaultValue = "",
  size = "md",
  variant = "outline",
  label = "Select",
  isDisabled,
  ...props
}: PropsWithChildren<CustomSelectProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    label,
    value: defaultValue,
  });

  const toggleContent = useCallback(() => {
    setIsOpen(!isOpen);
  }, []);

  const closeContent = useCallback(() => {
    setIsOpen(false);
  }, []);

  const choiceItem = useCallback((item: { label: string; value: string }) => {
    setSelectedValue(item);
    closeContent();
  }, []);

  const changeItem = useCallback((item: { label: string; value: string }) => {
    setSelectedValue(item);
  }, []);

  const { ref } = useOutsideClick({ callback: closeContent });

  const value = {
    isOpen,
    selectedValue,
    choiceItem,
    toggleContent,
    closeContent,
    changeItem,
    size,
    variant,
    label,
    isDisabled,
    ...props,
  };
  return (
    <div ref={ref} className={selectRoot} {...props}>
      <CustomSelectContext.Provider value={value}>
        {children}
      </CustomSelectContext.Provider>
    </div>
  );
};

export default CustomSelect;

export const useCustomSelectContext = () => {
  const context = useContext(CustomSelectContext);
  if (!context) {
    throw new Error("There is no CustomSelectContext");
  }
  return context;
};
