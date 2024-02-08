import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const accordion = recipe({
  base: {
    width: "100%",
    borderTop: "1px solid #E2E8F0",
  },
  variants: {},
  compoundVariants: [],
});

export const item = recipe({
  base: {
    width: "100%",
    borderBottom: "1px solid #E2E8F0",
    boxSizing: "border-box",
  },
  variants: {
    isDisabled: {
      true: {
        opacity: "0.8",
      },
      false: {},
    },
  },
});

export const button = style({
  border: "none",
  cursor: "pointer",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  boxSizing: "border-box",
  fontSize: "1rem",
  color: "#4A5568",
  selectors: {
    "&:hover": {
      backgroundColor: "#EDF2F7",
    },
  },
});

export const panel = recipe({
  base: {
    padding: "0.5rem 1rem",
  },
  variants: {
    isOpen: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

export type AccordionVariants = RecipeVariants<typeof accordion>;
