import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const FormHelperText = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default FormHelperText;
