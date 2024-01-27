import { LiaSpinnerSolid } from "react-icons/lia";
import { SpinVariants, spin } from "./Spinner.css";
type SpinnerProps = SpinVariants & {};
const Spinner = ({ size }: SpinnerProps) => {
  return <LiaSpinnerSolid className={spin({ size })} />;
};

export default Spinner;
