import { ReactNode, createContext, useId } from "react";
import FormLabel from "./FormLabel";
import FormErrorMessage from "./FormErrorMessage";
import FormHelperText from "./FormHelperText";
import "@/css/global.css";

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

FormControl.Label = FormLabel;
FormControl.HelperText = FormHelperText;
FormControl.ErrorMessage = FormErrorMessage;

export default FormControl;
