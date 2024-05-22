import { JSXElementConstructor, ReactElement, useState } from "react";

type ToggleProps = {
  before: ReactElement<any, string | JSXElementConstructor<any>>;
  after: ReactElement<any, string | JSXElementConstructor<any>>;
};
const Toggle = ({ before, after }: ToggleProps) => {
  const [clicked, setClicked] = useState(false);
  const toggle = () => {
    setClicked(!clicked);
  };
  return <div onClick={toggle}>{!clicked ? before : after}</div>;
};

export default Toggle;
