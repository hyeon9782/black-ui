import { LiaSpinnerSolid } from "react-icons/lia";
import { SpinVariants, spin } from "./Spinner.css";
type SpinnerProps = SpinVariants & {};
const Spinner = ({ size = "md", ...props }: SpinnerProps) => {
  return <LiaSpinnerSolid className={spin({ size })} {...props} />;
};

export default Spinner;
