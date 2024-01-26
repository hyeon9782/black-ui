import { ReactNode } from "react";
type TagLabelProps = {
  children: ReactNode;
};
const TagLabel = ({ children }: TagLabelProps) => {
  return <div>{children}</div>;
};

export default TagLabel;
