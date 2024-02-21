import { sprinkles } from "@/css/sprinkles.css";
import { keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const accordionDown = keyframes({
  from: { height: 0 },
  to: { height: "60px" },
});

const accordionUp = keyframes({
  from: { height: "60px" },
  to: { height: 0 },
});

export const accordion = sprinkles({
  width: "full",
  borderTopWidth: "px",
  borderBottomWidth: "0",
  borderLeftWidth: "0",
  borderRightWidth: "0",
  borderColor: "gray",
  borderStyle: "solid",
});

export const item = recipe({
  base: sprinkles({
    width: "full",
    borderTopWidth: "0",
    borderLeftWidth: "0",
    borderRightWidth: "0",
    borderBottomWidth: "px",
    borderColor: "gray",
    borderStyle: "solid",
    boxSizing: "border-box",
  }),
  variants: {
    isDisabled: {
      true: sprinkles({ opacity: "0.5" }),
      false: {},
    },
  },
});

export const button = sprinkles({
  borderStyle: "none",
  cursor: "pointer",
  width: "full",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: {
    base: "white",
    hover: "gray100",
    disabled: "backgroundSurfaceBaseDisabled",
  },
  paddingX: "4",
  paddingY: "2",
  boxSizing: "border-box",
  fontSize: "2",
  color: "textSecondary",
});

export const panel = recipe({
  base: sprinkles({
    paddingX: "4",
    paddingY: "2",
    boxSizing: "border-box",
  }),
  variants: {
    isOpen: {
      true: [
        sprinkles({ display: "block" }),
        // {
        //   height: "auto",
        //   overflow: "hidden",
        //   animation: `${accordionDown} 0.2s ease-out`,
        // },
      ],
      false: [
        sprinkles({ display: "none" }),
        // {
        //   // height: 0,
        //   overflow: "hidden",
        //   height: 0,
        //   // animation: `${accordionUp} 0.2s ease-out`,
        // },
      ],
    },
  },
});
