import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const accordion = recipe({
  base: sprinkles({
    width: "full",
    borderTopWidth: "px",
    borderBottomWidth: "0",
    borderLeftWidth: "0",
    borderRightWidth: "0",
    borderColor: "gray",
    borderStyle: "solid",
  }),
  variants: {},
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
  }),
  variants: {
    isOpen: {
      true: sprinkles({ display: "block" }),
      false: sprinkles({ display: "none" }),
    },
  },
});

export type AccordionVariants = RecipeVariants<typeof accordion>;
