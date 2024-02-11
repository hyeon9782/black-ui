import { InnerVariants, inner, progress } from "./Progress.css";

type Props = InnerVariants & {
  value: number;
};
const Progress = ({ value, size, color }: Props) => {
  return (
    <div className={progress}>
      <div
        className={inner({ size, color })}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default Progress;
