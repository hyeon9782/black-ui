import { ReactNode } from "react";
import {
  skeletonBackground,
  skeletonHeight,
  skeletonPlaceholder,
  skeletonRadius,
  skeletonWidth,
} from "./Skeleton.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

type SkeletonProps = {
  width: string;
  height: string;
  radius: string;
  children?: ReactNode;
  background: string;
};

const Skeleton = ({
  width,
  height,
  radius,
  children,
  background,
}: SkeletonProps) => {
  return (
    <div
      className={skeletonPlaceholder}
      style={assignInlineVars({
        [skeletonWidth]: width,
        [skeletonHeight]: height,
        [skeletonBackground]: background,
        [skeletonRadius]: radius,
      })}
    >
      {children}
    </div>
  );
};

export default Skeleton;
