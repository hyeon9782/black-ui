import { ReactNode } from "react";
import { helperText } from "./FormControl.css";
type Props = {
  children: ReactNode;
};
const FormHelperText = ({ children }: Props) => {
  return <p className={helperText}>{children}</p>;
};

export default FormHelperText;
