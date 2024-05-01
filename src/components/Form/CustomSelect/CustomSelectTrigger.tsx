import { PropsWithChildren } from "react";

const CustomSelectTrigger = ({ children, ...props }: PropsWithChildren) => {
  return <div {...props}>{children}</div>;
};

export default CustomSelectTrigger;
