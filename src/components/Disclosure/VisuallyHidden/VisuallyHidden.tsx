import * as React from "react";
import { visuallyHidden } from "./VisuallyHidden.css";

type Props = {
  as?: "div" | "span";
};

export const VisuallyHidden = ({
  as = "div",
  children,
  ...props
}: React.PropsWithChildren<Props>) => {
  return (
    <div className={visuallyHidden} {...props}>
      {children}
    </div>
  );
};

export const VisuallyHiddenInput = ({ ...props }) => (
  <input className={visuallyHidden} {...props} />
);
