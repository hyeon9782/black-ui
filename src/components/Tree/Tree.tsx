import { useState } from "react";
import { item } from "./Tree.css";

export interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

interface TreeProps {
  node: TreeNode;
}

const Tree = ({ node }: TreeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ul>
      <li className={item({})} onClick={toggleItem}>
        {node.name}
        {node.children && (
          <ul>
            {node.children.map((child) => (
              <Tree key={child.id} node={child} />
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default Tree;
