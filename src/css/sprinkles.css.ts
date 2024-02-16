import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";
import { calc } from "@vanilla-extract/css-utils";

const space = vars.space;

const negativeSpace = {
  ["-px"]: `${calc(space.px).negate()}`,
  ["-0.5"]: `${calc(space["0.5"]).negate()}`,
  ["-1"]: `${calc(space["1"]).negate()}`,
  ["-1.5"]: `${calc(space["1.5"]).negate()}`,
  ["-2"]: `${calc(space["2"]).negate()}`,
  ["-2.5"]: `${calc(space["2.5"]).negate()}`,
  ["-3"]: `${calc(space["3"]).negate()}`,
  ["-3.5"]: `${calc(space["3.5"]).negate()}`,
  ["-4"]: `${calc(space["4"]).negate()}`,
  ["-10"]: `${calc(space["10"]).negate()}`,
};

const margins = {
  ...space,
  ...negativeSpace,
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    cursor: ["pointer", "progress"],
    boxSizing: ["border-box", "content-box"],
    overflow: ["hidden", "auto", "scroll"],
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    borderStyle: vars.borderStyles,
    borderWidth: vars.borderWidths,
    borderBottomWidth: vars.borderWidths,
    borderLeftWidth: vars.borderWidths,
    borderRightWidth: vars.borderWidths,
    borderTopWidth: vars.borderWidths,
    borderRadius: vars.radii,
    borderBottomLeftRadius: vars.radii,
    borderBottomRightRadius: vars.radii,
    borderTopLeftRadius: vars.radii,
    borderTopRightRadius: vars.radii,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: margins,
    marginBottom: margins,
    marginLeft: margins,
    marginRight: margins,
    gap: vars.space,
    height: vars.space,
    maxWidth: vars.space,
    maxHeight: vars.space,
    fontSize: vars.fontSizes,
    fontWeight: vars.fontWeights,
    listStyle: ["none", "outside"],
    position: ["absolute", "fixed", "relative", "sticky"],
    right: vars.space,
    textAlign: ["center", "left", "right"],
    top: vars.space,
    visibility: ["hidden", "visible"],
    width: vars.space,
    opacity: [
      "0",
      "0.1",
      "0.2",
      "0.3",
      "0.4",
      "0.5",
      "0.6",
      "0.7",
      "0.8",
      "0.9",
      "1",
    ],
    captionSide: ["bottom", "top"],
  },
  shorthands: {
    borderLeftRadius: ["borderBottomLeftRadius", "borderTopLeftRadius"],
    borderRightRadius: ["borderBottomRightRadius", "borderTopRightRadius"],
    borderTopRadius: ["borderTopLeftRadius", "borderTopRightRadius"],
    borderBottomRadius: ["borderBottomLeftRadius", "borderBottomRightRadius"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

const selectorProperties = defineProperties({
  conditions: {
    base: {},
    active: { selector: "&:active" },
    focus: { selector: "&:focus" },
    hover: { selector: "&:hover" },
    disabled: { selector: "&:disabled" },
  },
  defaultCondition: "base",
  properties: {
    backgroundColor: vars.colors,
    borderColor: vars.colors,
    boxShadow: vars.shadows,
    color: vars.colors,
    outlineColor: vars.colors,
    textDecoration: vars.textDecoration,
    accentColor: vars.colors,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  selectorProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
