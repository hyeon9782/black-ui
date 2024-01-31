import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
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

    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    gap: vars.space,
  },
  shorthands: {
    // borderLeftRadius: ["borderBottomLeftRadius", "borderTopLeftRadius"],
    // borderRightRadius: ["borderBottomRightRadius", "borderTopRightRadius"],
    // borderTopRadius: ["borderTopLeftRadius", "borderTopRightRadius"],
    // borderBottomRadius: ["borderBottomLeftRadius", "borderBottomRightRadius"],
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
    textDecoration: vars.fonts,
  },
});

// const colorProperties = defineProperties({
//   conditions: {
//     lightMode: {},
//     darkMode: { "@media": "(prefers-color-scheme: dark)" },
//   },
//   defaultCondition: "lightMode",
//   properties: {
//     color: vars.colors,
//     background: vars.colors,
//   },
// });

export const sprinkles = createSprinkles(
  responsiveProperties,
  selectorProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
