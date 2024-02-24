import { PropsWithChildren } from "react";
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
  background: string;
};

const Skeleton = ({
  width,
  height,
  radius,
  children,
  background,
  ...props
}: PropsWithChildren<SkeletonProps>) => {
  return (
    <div
      className={skeletonPlaceholder}
      style={assignInlineVars({
        [skeletonWidth]: width,
        [skeletonHeight]: height,
        [skeletonBackground]: background,
        [skeletonRadius]: radius,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Skeleton;
