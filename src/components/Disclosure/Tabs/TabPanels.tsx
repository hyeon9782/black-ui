import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const TabPanels = ({ children }: Props) => {
  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { index })
          : child
      )}
    </div>
  );
};

export default TabPanels;
