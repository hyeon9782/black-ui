import { ReactNode, createContext, forwardRef, useId } from "react";

type FormContextProps = {
  id?: string;
};

export const FormContext = createContext<FormContextProps>({});

type FormControlProps = {
  children: ReactNode;
  isInvalid?: boolean;
};

const FormControl = forwardRef(
  ({ children, ...props }: FormControlProps, ref) => {
    const id = useId();

    const prop = {
      ...props,
      id,
      ref,
    };
    return (
      <div>
        <FormContext.Provider value={prop}>{children}</FormContext.Provider>
      </div>
    );
  },
);

export default FormControl;
