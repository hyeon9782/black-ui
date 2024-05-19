import { PropsWithChildren } from "react";
import { tree } from "./Tree.css";

const Tree = ({ children }: PropsWithChildren) => {
  return <ul className={tree({})}>{children}</ul>;
};

export default Tree;
