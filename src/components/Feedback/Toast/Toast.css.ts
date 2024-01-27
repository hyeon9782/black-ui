import { vars } from "@/css/vars.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const wrap = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    position: "fixed",
  },
  variants: {
    position: {
      top: {
        top: 10,
        left: "50%",
        transform: "translate(-50%, 0)",
      },
      topLeft: {},
      topRight: {},
      bottom: {},
      bottomLeft: {},
      bottomRight: {},
    },
  },
  defaultVariants: {
    position: "top",
  },
});

export const toast = recipe({
  base: {
    opacity: 50,
    borderRadius: vars.radii.lg,
    padding: "10px 20px",
  },
  variants: {
    status: {
      success: {
        background: "lightgreen",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    status: "success",
  },
});

export type ToastVariants = RecipeVariants<typeof toast>;
