import { InnerVariants, inner, progress } from "./Progress.css";

type Props = InnerVariants & {
  value: number;
};
const Progress = ({ value, size, color, ...props }: Props) => {
  return (
    <div className={progress} {...props}>
      <div
        className={inner({ size, color })}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default Progress;
