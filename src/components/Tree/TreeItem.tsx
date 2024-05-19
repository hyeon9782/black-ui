import {
  JSXElementConstructor,
  MouseEvent,
  ReactElement,
  useState,
} from "react";
import { item } from "./Tree.css";

export interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

interface TreeProps {
  node: TreeNode;
  leftIcon?: ReactElement<any, string | JSXElementConstructor<any>>;
  rightIcon?: ReactElement<any, string | JSXElementConstructor<any>>;
}

const TreeItem = ({ node, leftIcon, rightIcon }: TreeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <li className={item({})} onClick={toggleItem}>
      <div style={{ display: "flex" }}>
        <div>{leftIcon}</div>
        <span>{node.name}</span>
        <div>{rightIcon}</div>
      </div>
      {isOpen && (
        <ul>
          {node.children?.map((child) => (
            <TreeItem key={child.id} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeItem;
