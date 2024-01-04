import { colors } from "./color";
import { radii } from "./radii";
import { shadows } from "./shadows";
import { space } from "./space";
import { fonts } from "./fonts";
import { media } from "./media";

export const tokens = {
  colors,
  radii,
  shadows,
  space,
  fonts,
  media,
};

export type Tokens = typeof tokens;
