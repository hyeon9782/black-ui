import { colors } from "./color";
import { radii } from "./radii";
import { shadows } from "./shadows";
import { space } from "./space";
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacing,
  lineHeights,
  textDecoration,
} from "./fonts";
import { media } from "./media";
import { borderStyles, borderWidths } from "./border";

export const tokens = {
  borderStyles,
  borderWidths,
  colors,
  radii,
  shadows,
  space,
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacing,
  lineHeights,
  textDecoration,
  media,
};

export type Tokens = typeof tokens;
