import { ReactNode } from "react";
import { errorMessage } from "./FormControl.css";
type Props = {
  children: ReactNode;
};
const FormErrorMessage = ({ children }: Props) => {
  return <p className={errorMessage}>{children}</p>;
};

export default FormErrorMessage;
