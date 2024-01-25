import { vars } from "@/css/vars.css";
import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const wrap = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1,
});

export const modal = recipe({
  base: {
    backgroundColor: "white",
    borderRadius: vars.radii.lg,
    padding: vars.space[10],
    zIndex: 2,
  },
  variants: {},
});

export type ModalVariants = RecipeVariants<typeof modal>;
