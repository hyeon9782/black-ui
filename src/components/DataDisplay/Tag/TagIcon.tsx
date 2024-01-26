import { ReactElement } from "react";

type TagIconProps = {
  as: ReactElement;
};

const TagIcon = ({ as }: TagIconProps) => {
  return <>{as}</>;
};

export default TagIcon;
