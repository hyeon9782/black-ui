import { PropsWithChildren, createContext, useContext, useState } from "react";

type CustomSelectContextProps = {
  isOpen: boolean;
  toggleContent: () => void;
  closeContent: () => void;
  selectedValue: {
    label: string;
    value: string;
  };
  selectItem: (item: { label: string; value: string }) => void;
};

const CustomSelectContext = createContext<CustomSelectContextProps | null>(
  null,
);

type CustomSelectProps = {
  defaultValue?: string;
};

const CustomSelect = ({
  children,
  defaultValue = "",
  ...props
}: PropsWithChildren<CustomSelectProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    label: "Select",
    value: defaultValue,
  });

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const closeContent = () => {
    setIsOpen(false);
  };

  const selectItem = (item: { label: string; value: string }) => {
    setSelectedValue(item);
    closeContent();
  };

  const value = {
    ...props,
    isOpen,
    selectedValue,
    selectItem,
    toggleContent,
    closeContent,
  };
  return (
    <div>
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
