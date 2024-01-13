import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const FormErrorMessage = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default FormErrorMessage;
