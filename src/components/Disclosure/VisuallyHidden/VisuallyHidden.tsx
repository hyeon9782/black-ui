import * as React from "react";

import * as styles from "./VisuallyHidden.css";
import { Box } from "@/components/Layout";

type Props = {
  as?: "div" | "span";
};

const VisuallyHidden = ({
  as = "div",
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <Box
      as={as}
      borderWidth="0"
      className={styles.root}
      height="px"
      margin="-px"
      overflow="hidden"
      padding="0"
      position="absolute"
      whiteSpace="nowrap"
      width="px"
    >
      {children}
    </Box>
  );
};

export default VisuallyHidden;
