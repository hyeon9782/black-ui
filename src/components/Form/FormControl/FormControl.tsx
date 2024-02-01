import { ReactNode, createContext, useId } from "react";

type FormContextProps = {
  id?: string;
};

export const FormContext = createContext<FormContextProps>({});

type FormControlProps = {
  children: ReactNode;
  isInvalid?: boolean;
};

const FormControl = ({ children, ...props }: FormControlProps) => {
  const id = useId();

  const prop = {
    ...props,
    id,
  };
  return (
    <div>
      <FormContext.Provider value={prop}>{children}</FormContext.Provider>
    </div>
  );
};

export default FormControl;
