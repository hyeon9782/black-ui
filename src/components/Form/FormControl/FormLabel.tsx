import React, { ReactNode, useContext } from "react";
import { FormContext } from "./FormControl";
type FormLabelProps = {
  children: ReactNode;
};
const FormLabel = ({ children }: FormLabelProps) => {
  const { id } = useContext(FormContext);
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <br />
    </>
  );
};

export default FormLabel;
