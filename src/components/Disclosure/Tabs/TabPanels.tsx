import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const TabPanels = ({ children }: Props) => {
  return (
    <div role="tabpanel">
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { ...child.props, index })
          : child,
      )}
    </div>
  );
};

export default TabPanels;
