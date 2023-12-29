import { borderStyles, borderWidths } from "./border";
import { colors } from "./color";
import { radii } from "./radii";
import { shadows } from "./shadows";
import { space } from "./space";
import { fonts } from "./fonts";
import { media } from "./media";

export const tokens = {
  borderStyles,
  borderWidths,
  colors,
  radii,
  shadows,
  space,
  fonts,
  media,
};

export type { Mode } from "./color";
export type Tokens = typeof tokens;
